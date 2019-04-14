fetch('https://api.openweathermap.org/data/2.5/weather?q=Topi&appid=8fdeb7dec56813de2ea8a6a8457d3401&units=metric', {mode: 'cors'})
.then(function (res) {
  return res.json();
}).then(function (myJson) {
  console.log(myJson);
}).catch(function (err) {
  console.log(err);
});

// DIATJA11JEEH