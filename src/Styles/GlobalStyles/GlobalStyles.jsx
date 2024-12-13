import { createGlobalStyle } from "styled-components";

import PokeSolid from '../../assets/Font/PokeSolid.ttf'


const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'PokeSolid';
  src: url(${PokeSolid}) format('truetype'); 
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'PokeSolid',sans-serif ;
    text-shadow: ${({ theme }) =>
    theme.bodyBg === "#121212" 
      ? `-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black`
      : `-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white`};
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s ease, color 0.3s ease;
    background-image: ${({ theme }) => theme.bodyBgImg ? `url(${theme.bodyBgImg})` : 'none'};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
     &::-webkit-scrollbar{
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff; 
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #000; 
  }
    
  }
`;

export default GlobalStyles;
