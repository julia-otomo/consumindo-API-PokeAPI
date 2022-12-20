async function consomePokeAPI() {
    const loading = document.querySelector('#loading');

    const pokemonsDaApi = await fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then ((response) => response.json())
    .catch (() => console.log('Não foi possível buscar informações nessa API'))

    loading.classList.add('hidden');
    
    return pokemonsDaApi.results;
}

let pokemonList = await consomePokeAPI();

