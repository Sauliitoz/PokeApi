import React, { useState, useEffect } from "react";
import { PokemonList } from "../PokemonComponents/List/PokemonList";
import { LoadMoreButton } from "../Buttons/ButtonLoadMore/ButtonLoadMore";
import { Div0, Img } from './StyleShowPokemon';
import PokeLogo from '../../assets/img/Logo/PokeLogo.svg';
import { ButtonReturnTop } from "../Buttons/ButtonReturnTop/ButtonReturnTop";
import ThemeToggle from "../Buttons/ThemeToggler/ThemeToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";




export const ShowPokemons = () => {
  const [dataDetails, setDataDetails] = useState([]);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    if (isFetching) return;
    setIsFetching(true);

    try {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch Pokémon data");

      const data = await response.json();

      if (offset === 0) {
        setTotalItems(data.count);
      }

      const newDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          const details = await detailsResponse.json();
          return details;
        })
      );


      setDataDetails((prev) => {
        const uniqueDetails = newDetails.filter(
          (pokemon) => !prev.some((existing) => existing.name === pokemon.name)
        );
        return [...prev, ...uniqueDetails];
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (!isFetching) {
      fetchData();
    }
  }, [offset]);

  const handleLoadMore = () => {
    if (!isFetching && dataDetails.length < totalItems) {
      setOffset((prev) => prev + 10);
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (

    <Div0>
      <div>
        <Img src={PokeLogo} alt="Pokémon Logo" />
      </div>
      <ThemeToggle />
      <PokemonList pokemonDetails={dataDetails} />
      <LoadMoreButton
        onClick={handleLoadMore}
        disabled={isFetching || dataDetails.length >= totalItems}
      >
        {isFetching ?
          <FontAwesomeIcon icon={faSpinner} />
          : dataDetails.length >= totalItems ? "All Pokémons loaded" : <FontAwesomeIcon icon={faAnglesDown} size="3x" />}
      </LoadMoreButton>
      <ButtonReturnTop />
    </Div0>

  );
};


