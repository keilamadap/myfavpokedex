import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { FavoriteProvider } from "../contexts/favoritesContext";
import AboutMe from "./AboutMe";
import Home from "./Home";
import PokemonDetails from "./PokemonDetails";

export default function Routes() {
  const favoritesFromLocalStorage =
    JSON.parse(window.localStorage.getItem("f")) || [];
  const [favorites, setFavorites] = React.useState(favoritesFromLocalStorage);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    window.localStorage.setItem("f", JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons,
      }}
    >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.StrictMode>
          <Router>
            <Route path="/" element={<Home />} />
            <Route exact path="/details/:id" element={<PokemonDetails />} />
            <Route exact path="/aboutme" element={<AboutMe />} />
          </Router>
        </React.StrictMode>
      </BrowserRouter>
    </FavoriteProvider>
  );
}
