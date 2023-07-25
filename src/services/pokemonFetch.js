const fetchPokemon = async (url) => {
  try {
  const response = await fetch(url);
  const data = await response.json();
  return data;
  } catch (error) {
    console.log(error)
  }
}

export const fetchPokemons = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  return fetch(URL)
    .then(response => response.json())
    .then(data => Promise.all(data.results.map(pokemon => fetchPokemon(pokemon.url))))
    .catch(error => {
      console.log(error);
      return [];
    });
}
