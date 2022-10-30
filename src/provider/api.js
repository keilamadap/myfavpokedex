//url para pesquisar qualquer pokemon (usar no search)

export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url); // colocar await na frente do fetch pra nao dar erro
    return await response.json();
  } catch (error) {
    console.log("error:", error);
  }
};

// trazendo o limite de 50 pokemons

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}?&offset=${offset}}`;
    const response = await fetch(url); // colocar await na frente do fetch pra nao dar erro
    return await response.json();
  } catch (error) {
    console.log("error:", error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
