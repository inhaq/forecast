const checkBox = document.querySelector('.checkbox');
const mainCityTemp = document.querySelector('.main-city-temp');

function changeUnit() {
  if (checkBox.checked === true){
    mainCityTemp.textContent = Math.round((Number(mainCityTemp.textContent.toString().split("°")[0]) * 1.8) + 32);
  }
  if (checkBox.checked === false){
    mainCityTemp.textContent = Math.round((Number(mainCityTemp.textContent.toString().split("°")[0]) - 32) / 1.8);
  }
}

checkBox.addEventListener('click', changeUnit);

export {changeUnit};