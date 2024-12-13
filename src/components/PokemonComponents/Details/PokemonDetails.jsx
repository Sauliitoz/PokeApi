import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Div1, Div2, Div3, Div4, H1, Img, P, P_Type, H3, H4, Ul, Ul2, Li, Li2, A, } from './StylePokemonDetails'
import { ButtonReturnTop } from '../../Buttons/ButtonReturnTop/ButtonReturnTop';
import pkball from '../../../assets/img/pkball.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


export const PokemonDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate()
  const [details, setDetails] = useState(null);
  const [abilityDescription, setAbilityDescription] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();

        setDetails(data);

        const descriptions = {};
        const abilityFetch = data.abilities.map(async (ability) => {
          const url = ability.ability.url;
          const response = await fetch(url);
          const data = await response.json();
          descriptions[url] = data.effect_entries.find(entry => entry.language.name === 'en').effect;
        });

        await Promise.all(abilityFetch);
        setAbilityDescription(descriptions);
      } catch (error) {
        console.log('Error fetching')
      } finally {
        setLoading(false)
      }
    }
    getData();
  }, [name]);

  if (loading) {
    return <p>Loading Pokémon detais</p>;
  }
  if (!details) {
    return <p>Pokémon not found.</p>
  }

  return (
    <Div1>
      <A onClick={() => navigate('/')}><FontAwesomeIcon icon={faHouse} size="2x" /></A>
      <Div2>
        <H1>{details.name}</H1>
        <Img src={details.sprites.front_default || pkball} alt={details.name} />
        <P_Type>Type: {details?.types?.map(t => t.type.name).join('/') || 'N/A'}</P_Type>
      </Div2>
      <Div3>
        <H3>Abilities</H3>
        <Ul>
          {details.abilities.map((ability, index) => (
            <Li key={index}>
              <H4>{ability.ability.name}</H4>
              <P>{abilityDescription[ability.ability.url] || 'Loading description or not found...'}</P>
            </Li>
          ))}
        </Ul>
      </Div3>
      <Div4>
        <H3>Moves</H3>
        <Ul2>
          {details.moves.map((move, index) => (
            <Li2 key={index}>
              {move.move.name}
            </Li2>
          ))}
        </Ul2>
      </Div4>
      <ButtonReturnTop />

    </Div1>
  );
};

export default PokemonDetails;





