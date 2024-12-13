import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;


`;

export const Li = styled.li`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2rem;
background-color: #fff5f039;

`;

export const H2 = styled.h2`
  padding: 20px 20px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-align: center;
  max-height: 300px;
`;

export const Img = styled.img`
  display: flex;
  align-self: center;
  justify-self: center;
  min-width: 250px;
  width: 70%;
  
  
  
`;

export const P = styled.p`
text-transform:capitalize;
letter-spacing: 0.2rem;
display: flex;
align-self: center;
justify-self: center;
`;


