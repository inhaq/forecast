import {getIcon}  from "./useIcon";
import {getColor} from "./useColor";

function renderMainUI(data) {

  const mainCityTemp = document.querySelector('.main-city-temp');
  const mainCityName = document.querySelector('.main-city-name');
  const mainStatus = document.querySelector('.main-status');
  const mainCityIcon = document.querySelector('.main-city-icon');
  const topBg = document.querySelector('.top');

  mainCityTemp.textContent = Math.round(data.main.temp);
  mainCityName.textContent = data.name + ', ' + data.sys.country;
  mainStatus.textContent = data.weather[0].main;
  mainCityIcon.src = getIcon(data.weather[0]);
  topBg.style.background = getColor(data.weather[0]);
}

function renderDaysUI(data) {
  const time = document.querySelector('.time');
  const dayCards = document.querySelector('.day-cards');
  if (data.cod === '200'){
    dayCards.innerHTML = '';
  }

  for (let i = 0; i < data.list.length; i += 8) {
    let day = `<div class="day day1">
      <div class="day-name">
        ${data.list[i].dt_txt.split('').slice(5, 10).join('')}
      </div>
      <div class="icon">
        <img class="day-icon" src="${getIcon(data.list[i].weather[0])}">
      </div>
      <div class="temp">
        ${Math.round(data.list[i].main.temp) + '°C'}
      </div>
    </div>`;
    dayCards.insertAdjacentHTML('beforeend', day);
  }
  time.textContent = "Updated : " + data.list[0].dt_txt.split('').slice(0, 10).join('');
}

function renderMyCities(data) {
  const cityCards = document.querySelector('.city-cards');
  // cityCards.innerHTML = '';

  cityCards.insertAdjacentHTML('beforeend', `<div class="city city1">
    <div class="city-name">${data.name}, ${data.sys.country}</div>
  <div class="temp-icon">
    <div class="city-temp">${Math.round(data.main.temp) + '°C'}</div>
  <img alt="cloudy" class="city-icon" src="${getIcon(data.weather[0])}">
    </div>
    <div class="status">${data.weather[0].main}</div>
  </div>`);

}

export {renderMainUI, renderDaysUI, renderMyCities};