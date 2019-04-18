import {renderMainUI, renderDaysUI,renderMyCities} from "./render";

export function getWeather(input = 'Islamabad') {

  const key = '8fdeb7dec56813de2ea8a6a8457d3401';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`, {mode: 'cors'})
    .then(function (res) {
      return res.json();
    }).then(function (myJson) {
      renderMainUI(myJson);
  }).catch(function (err) {
    alert("Location not found")
  });
}

export function getForecast(input = 'Islamabad'){
  const key = '8fdeb7dec56813de2ea8a6a8457d3401';
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${key}&units=metric`, {mode: 'cors'})
    .then(function (res) {
      return res.json();
    }).then(function (myJson) {
    renderDaysUI(myJson);
  }).catch(function (err) {
    console.log(err);
  });
}

export function getMyCities(input = ['Islamabad','Bijeljina','Lagos','Sao Paulo']){
  const key = '8fdeb7dec56813de2ea8a6a8457d3401';
  for (let i = 0; i < input.length; i++){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input[i]}&appid=${key}&units=metric`, {mode: 'cors'})
      .then(function (res) {
        return res.json();
      }).then(function (myJson) {
      renderMyCities(myJson);
    }).catch(function (err) {
      console.log(err);
    });
  }

}