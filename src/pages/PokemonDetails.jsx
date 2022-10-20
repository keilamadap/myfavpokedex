import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FavoriteContext, {
  FavoriteProvider,
} from "../contexts/favoritesContext";
import SinglePokemonImg from "../components/SinglePokemonIMG";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetalhes, setPokemonDetalhes] = useState("");
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [pokemonType, setPokemonType] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);

  const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  // const getPokemonDetails = async (url) => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setPokemonDetalhes(data);
  // };

  // useEffect(() => {
  //   const pokemonURL = `${baseURL}${id}`;
  //   getPokemonDetails(pokemonURL);
  // }, []);

  const getSinglePokemon = async (url) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Não foi possível encontrar o conteúdo");
        }
        return res.json();
      })
      .then((data) => {
        setHeight(data.height);
        setWeight(data.weight);
        setAbilities(data.abilities);
        setPokemonType(data.types);
        setPokemonName(data.name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getSinglePokemon(baseURL);
  }, []);

  return (
    <main>
      <section className="details-header">
        <Navbar />
      </section>
      <SinglePokemonImg id={id} pokemonName={pokemonName} />

      <section className="characteristics">
        <h2 className="title-charac"> # characteristics </h2>

        {/* <hr className="horizontal-rule"></hr> */}
        <br />

        <p>
          <b>⭐️ Height</b>:&nbsp;<span>{height / 10}&nbsp;m</span>
        </p>
        <hr className="horizontal-rule"></hr>
        <p>
          <b>⭐️ Weight</b>:&nbsp;<span>{weight / 10}&nbsp;kg</span>
        </p>
        <hr className="horizontal-rule"></hr>
        <p>
          <b>⭐️ Abilities</b>:
        </p>

        <div className="ability-container">
          {abilities &&
            abilities.map((ability) => {
              return <div className="ability">{ability.ability.name}</div>;
            })}
        </div>
      </section>
      <Link to="/" className="goback">
        Voltar
      </Link>
    </main>
  );
};

export default PokemonDetails;
