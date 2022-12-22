function renderPokemons(array) {
    const ul = document.querySelector('#pokemon_list');
  
    array.forEach(pokemon => {
      const pokedexNumber = pokemon.url.slice(34, -1);
  
      let pokemons = createCards(pokemon, pokedexNumber);
  
      ul.appendChild(pokemons);
    });
  }

function renderPokemonFound (pokemon) {
    const ul = document.querySelector('#pokemon_list');

    const pokedex = pokemon.id;

    let pokemonCard =createCardSpecificPokemon(pokemon, pokedex);

    let returnButton = document.createElement('button');
    returnButton.classList.add('return_button');
    returnButton.innerText = 'Voltar';

    ul.append(pokemonCard, returnButton);
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

function createCardSpecificPokemon (pokemon, pokedex) {
    let li = document.createElement('li');
  
    let pokemonImage = document.createElement('img');
    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex}.png`;
    pokemonImage.alt = pokemon.name;
  
    let pokemonName = document.createElement('h3');
    pokemonName.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
  
    li.append(pokemonImage, pokemonName);
  
    return li;
  }
function createToast() {
  let toast = document.createElement('dialog');
  toast.classList.add('toast');

  let p = document.createElement('p');
  p.innerText = 'Não foi possível encontrar nenhum pokemon com esse nome';

  let img = document.createElement('img');
  img.src = './src/assets/dcbvppr-f829a4de-23eb-4826-9c8e-5ea941962211.png';

  toast.append(p, img);

  return toast;
}
  


