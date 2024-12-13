import React from "react";
import { PokemonCard } from "../Card/PokemonCard";
import { Ul3 } from "./StylePokemonList";

export const PokemonList = ({ pokemonDetails }) => {
      return (
            <Ul3>
                  {Array.isArray(pokemonDetails) && pokemonDetails.map((details, index) => (
                        details && details.sprites && details.types && ( 
                              <PokemonCard
                                    key={index}
                                    name={details.name}
                                    sprite={details.sprites.front_default}
                                    types={details.types.map((type) => type.type.name)}
                              />
                        )
                  ))}
            </Ul3>
      );
};
