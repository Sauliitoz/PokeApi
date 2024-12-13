import React from "react";
import pokeBall from "../../../assets/img/pkball.png"
import { Li, H2, Img, P, StyledLink } from './StylePokemonCard'


export const PokemonCard = ({ name, sprite, types }) => (
      <Li>
            <StyledLink to={`/pokemon/${name}`}>
                  <H2>{name}</H2>
                  <Img src={sprite ? sprite : <img src={pokeBall} alt="Not Found" />} alt={name} />
                  <P>{Array.isArray(types) ? types.join('/') : 'Unknown Type'}</P>


            </StyledLink>

      </Li>
);




