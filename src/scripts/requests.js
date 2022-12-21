async function consomePokeAPI() {
    const loading = document.querySelector('#loading');

    const pokemonsDaApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then ((response) => response.json())
    .then((response) => {
      loading.classList.add('hidden');
      return renderizaPokemons(response.results)
    }
   )
    .catch (() => console.log('Não foi possível buscar informações nessa API'))
    
    return pokemonsDaApi.results;
}

consomePokeAPI();

