'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('HTTP ERROR');
      }
    })
    .then((jsonData) => {
      return jsonData.results;
    })
    .catch((error) => {
      console.log(error.message);
    });
}

async function fetchAndPopulatePokemons() {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Get pokemon!';
  button.classList.add('pokemon-button');
  button.id = 'poke-button';
  document.body.appendChild(button);
  const pokemonBtn = document.getElementById('poke-button');
  const select = document.createElement('select');
  select.id = 'pokemon-select';
  select.classList.add('pokemon-select');
  document.body.appendChild(select);
  pokemonBtn.addEventListener('click', () => {
    populatePokemons();
  });
}

async function populatePokemons() {
  try {
    const pokemonsArr = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const select = document.getElementById('pokemon-select');
    pokemonsArr.forEach((pokemon, index) => {
      const pokemonOption = document.createElement('option');
      pokemonOption.textContent = pokemon.name;
      pokemonOption.value = index + 1;
      select.appendChild(pokemonOption);
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchImage(url, pokemonImg, pokemonName) {
  try {
    const pokemonData = await fetch(url);
    if (pokemonData.ok) {
      const jsonPokemonData = await pokemonData.json();
      pokemonImg.src = `${jsonPokemonData['sprites']['other']['dream_world']['front_default']}`;
      pokemonImg.alt = `image of ${pokemonName}`;
    } else {
      throw new Error('HTTP ERROR');
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function main() {
  try {
    fetchAndPopulatePokemons();
    const pokemonImg = document.createElement('img');
    pokemonImg.src = '#';
    pokemonImg.alt = '';
    document.body.appendChild(pokemonImg);
    const pokemonSelect = document.getElementById('pokemon-select');
    pokemonSelect.addEventListener('change', (e) => {
      const selectedPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${e.target.value}/`;
      const pokemonName = e.target.options[e.target.selectedIndex].text;
      fetchImage(selectedPokemonUrl, pokemonImg, pokemonName);
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
