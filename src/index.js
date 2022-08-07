/* eslint-disable linebreak-style */
import showItems from './showItems.js';

// eslint-disable-next-line no-unused-vars

const main = document.getElementById('main');
const card = document.getElementById('cardClick');

card.addEventListener('click', () => {
  main.innerHTML = '';
  showItems();
});
