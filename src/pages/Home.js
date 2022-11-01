import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Pokedex from "../components/Pokedex";
import Search from "../components/Search";
import FavoriteContext from "../contexts/favoritesContext";
import { getPokemonData, getPokemons, searchPokemon } from "../provider/api";
import "./Home.css";

const favoriteKey = "f";

function Home() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const {favorites, updateFavoritePokemons} = useContext(FavoriteContext);
  // limite dos itens por pagina
  const itensPerPage = 20;

  //funcao para puxar os dados da API na url do getPokemonData
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || []; //precisa definir essa condicao para ele nao dar nulo
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <Search onSearch={onSearchHandler} />
      {notFound ? (
        <div className="not-found-text">Sem resultados, tente novamente!</div>
      ) : (
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
export default Home;
