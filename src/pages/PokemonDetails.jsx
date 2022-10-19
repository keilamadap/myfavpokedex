import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FavoriteContext, {
  FavoriteProvider,
} from "../contexts/favoritesContext";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetalhes, setPokemonDetalhes] = useState("");

  const getPokemonDetails = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemonDetalhes(data);
  };

  useEffect(() => {
    const pokemonURL = `${baseURL}${id}`;
    getPokemonDetails(pokemonURL);
  }, []);

  return (
    <main>
      <section className="details-header">
        <Navbar />
      </section>
      <section className="details-section">
        <div className="details-container">
          {pokemonDetalhes && (
            <>
              <h3>{pokemonDetalhes.name}</h3>

              <img
                alt={pokemonDetalhes.name}
                src={pokemonDetalhes.sprites.front_default}
                className="pokemon-img"
              />
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default PokemonDetails;
