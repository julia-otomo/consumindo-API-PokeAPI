function renderizaPokemons(array) {
    const ul = document.querySelector('#pokemon_list');
  
    array.forEach(pokemon => {
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
  
