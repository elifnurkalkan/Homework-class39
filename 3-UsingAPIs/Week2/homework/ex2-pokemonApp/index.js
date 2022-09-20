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
const button = document.createElement('button');
button.textContent = 'Get pokemon!';
document.body.appendChild(button);

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('HTTP Error');
  }
  return response.json();
}

function fetchAndPopulatePokemons() {
  const select = document.createElement('select');
  select.name = 'pokemons';
  document.body.appendChild(select);
}

function fetchImage() {
  const image = document.createElement('img');
  document.body.appendChild(image);
}

async function main() {
  try {
    const response = await fetchData(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
    );
  } catch (error) {
    console.error(error);
  }
}
