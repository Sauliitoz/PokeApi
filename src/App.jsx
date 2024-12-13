import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowPokemons } from './components/ShowPokemon/ShowPokemons';
import { PokemonDetails } from './components/PokemonComponents/Details/PokemonDetails';
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./Styles/Themes.jsx";
import styled from "styled-components";

import GlobalStyles from "./Styles/GlobalStyles/GlobalStyles";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <StyledThemeProvider theme={theme === "Dark" ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <Container>
          <Router>
            <Routes>
              <Route path='/' element={<ShowPokemons />} />
              <Route path='/pokemon/:name' element={<PokemonDetails />} />
            </Routes>
          </Router>
        </Container>
      </StyledThemeProvider>
    </>
  );
}

const AppWithThemeProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithThemeProvider;


export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0;
  padding: 0;
`;