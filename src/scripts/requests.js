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
  const ul = document.querySelector('#pokemon_list');
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
  })
  .catch (() => {
    let p = document.createElement('p');
    p.innerText = 'Não foi possível encontrar nenhum pokemon com esse nome. Tente novamente !'

    ul.appendChild(p);
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

    if (searchInput.value == '') {
      consomePokeAPI();
    } else {
      getPokemonByName(searchInput.value.toLowerCase())
    }
  })
}

consomePokeAPI();

renderSearch();


