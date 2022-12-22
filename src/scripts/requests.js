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
      return renderPokemons(response.results)
    }
   )
    .catch (() => console.log('Não foi possível buscar informações nessa API'))

    return pokemonsDaApi;
}

async function getPokemonByName (pokemonName) {
  const loading = document.querySelector('#loading');

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then ((response) => response.json())
  .then ((response) => {
    loading.classList.add('hidden');
    renderPokemonFound(response);
    returnToAllPokemons ();
  })
  .catch (() => {
    consomePokeAPI();
    const main = document.querySelector('main');
    const toast = createToast();

    main.append(toast);

    setTimeout(() => {
      toast.classList.add('toast_out')
    }, 2000);

    setTimeout(() => {
      toast.classList.remove('toast_out');
      toast.remove();
    }, 3000)
  }) 

  return pokemon;
}

function renderSearch() {
  const searchInput = document.querySelector('input');
  const searchButton = document.querySelector('.search-button');
  const ul = document.querySelector('#pokemon_list');

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    ul.innerHTML = '';

    getPokemonByName(searchInput.value.toLowerCase().trim());

    searchInput.value = '';
  })
}

function returnToAllPokemons () {
  const button = document.querySelector('.return_button');
  const ul = document.querySelector('#pokemon_list');

  button.addEventListener('click', () => {
    ul.innerHTML = '';
    consomePokeAPI();
  })

}

consomePokeAPI();

renderSearch();



