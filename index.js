import { getMemes } from './javascript/memes.js';

// Auxiliare Variables
let index = 0;
let data;

// Document DOM
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const search = document.getElementById('search');
const searchButton = document.getElementById('search-button');

// Get the data from the API
function init() {
  getMemes()
    .then(response => {
      data = response;
      renderMemes(data, index);
    });
}

// Event listeners
nextButton.addEventListener('click', () => {
  if (index >= data.length - 2) {
    return;
  }
  index <= data.length - 1 ? index+=2 : null
  renderMemes(data, index);
})

backButton.addEventListener('click', () => {
  index > 0 ? index -= 2 : null;
  renderMemes(data, index);
})

searchButton.addEventListener('click', () => {
  searchName(search.value);
})

// Search for a meme by name
function searchName (value) {
  const memes = data.filter(meme => meme.name.toLowerCase().includes(value.toLowerCase()));
  memes.length > 0 && renderMemes(memes, 0);
}


// Render memes on the page 
function renderMemes(data, index) {
  
  const memes = data.slice(index, index+2);
  const ulItem = document.getElementById('ul-item');
  ulItem.innerHTML = '';
  memes.forEach(meme => {
    const ul = document.createElement('ul');
    ul.classList.add('meme');
    ul.innerHTML = `
      <li>
        <img src="${meme.url}" alt="${meme.name}" />
        <h3>${meme.name}</h3>

      </li>
    `;
    ulItem.appendChild(ul);
  });
  
}


// Initialize the app
init()