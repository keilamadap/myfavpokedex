import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SinglePokemonImg from "../components/SinglePokemonIMG";

const PokemonDetails = () => {
  const { id } = useParams();
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);

  const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  // eslint-disable-next-line

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
        setPokemonName(data.name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getSinglePokemon(baseURL);
  });

  return (
    <main>
      <section className="details-header">
        <Navbar />
      </section>
      <SinglePokemonImg id={id} pokemonName={pokemonName} />

      <section className="characteristics">
        <h2 className="title-charac"> # characteristics </h2>

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
      <Link to="/">
        <button className="btn-voltar">Voltar</button>
      </Link>
    </main>
  );
};

export default PokemonDetails;
