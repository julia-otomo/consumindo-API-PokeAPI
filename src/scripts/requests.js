async function consomePokeAPI() {
    const loading = document.querySelector('#loading');

    const pokemonsDaApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
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

consomePokeAPI();

async function renderizaPokemons() {
  const ul = document.querySelector('#pokemon_list');

  const pokemonList = await consomePokeAPI();

  pokemonList.forEach(pokemon => {
    const pokedexNumber = pokemon.url.slice(34, -1);

    let pokemons = createCards(pokemon, pokedexNumber);

    ul.appendChild(pokemons);
  });

  
}

function createCards (pokemon, pokedex) {
  let li = document.createElement('li');

  let pokemonImage = document.createElement('img');
  pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex}.png`;
  pokemonImage.alt = pokemon.name;

  let pokemonName = document.createElement('h3');
  pokemonName.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

  li.append(pokemonImage, pokemonName);

  return li;
}

renderizaPokemons()