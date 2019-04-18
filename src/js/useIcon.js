function getIcon(data) {
  if (data.id >= 200 && data.id < 300){
    return './src/img/storm.png';
  } else if (data.id >= 300 && data.id < 400){
    return './src/img/mist.png';
  } else if (data.id >= 400 && data.id < 500){
    return './src/img/clouds.png';
  } else if (data.id >= 500 && data.id < 600){
    return './src/img/rain.png';
  } else if (data.id >= 600 && data.id < 700){
    return './src/img/snow.png';
  } else if (data.id >= 700 && data.id < 800){
    return './src/img/mist.png';
  } else if (data.id === 800){
    return './src/img/sunny.png';
  } else if (data.id >= 800){
    return './src/img/clouds.png';
  }
}

export {getIcon};