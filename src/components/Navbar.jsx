import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoIMG =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div className="Navbar-container">
      <Link to="/">
        <img src={logoIMG} alt="pokeapi-logo" className="navbar-img" />
      </Link>
      <div className="favoriteBar">
        Favorites: <br />
        {favoritePokemons.length} ❤️
      </div>
    </div>
  );
};

export default Navbar;
