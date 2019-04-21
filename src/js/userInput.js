import {getWeather, getForecast} from './fetcher';

let userInput = function userInput() {

  const searchInput = document.querySelector('.search-input');
  const searchIcon = document.querySelector('.search-icon');

  function getInput(event) {
    if (searchInput.value !== '' && (event.keyCode === 13 || event.type === 'click')){
      getWeather(searchInput.value);
      getForecast(searchInput.value);
    }
  }

  searchIcon.addEventListener('click', getInput);
  searchInput.addEventListener('keyup', getInput);
};

export {userInput};