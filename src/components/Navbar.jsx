import React, { useContext } from "react";

import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  const logoIMG =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div className="Navbar-container">
      <img src={logoIMG} alt="pokeapi-logo" className="navbar-img" />

      <div className="favoriteBar">
        Favorites: <br />
        {favoritePokemons.length} ❤️
      </div>
    </div>
  );
};

export default Navbar;
