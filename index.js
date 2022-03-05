import { getMemes } from './javascript/memes.js';

function init() {

  getMemes().then(response => {
    renderMemes(response, 0);
  });
}





function renderMemes(memes) {
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

init()