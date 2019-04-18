function getColor(data) {
  if (data.id >= 200 && data.id < 300){
    return 'linear-gradient(0deg, rgba(244,252,255,1) 0%, rgba(37,70,80,1) 100%);';
  } else if (data.id >= 300 && data.id < 400){
    return 'linear-gradient(0deg, rgba(244,252,255,1) 0%, rgba(180,147,147,1) 100%)';
  } else if (data.id >= 400 && data.id < 500){
    return 'linear-gradient(0deg, rgba(244,252,255,1) 0%, rgba(92,132,175,1) 100%)';
  } else if (data.id >= 500 && data.id < 600){
    return 'linear-gradient(0deg, rgba(244,252,255,1) 0%, rgba(208,236,255,1) 100%)';
  } else if (data.id >= 600 && data.id < 700){
    return 'linear-gradient(0deg, rgba(244,252,255,1) 0%, rgba(186,206,221,1) 100%)';
  } else if (data.id >= 700 && data.id < 800){
    return 'linear-gradient(0deg, rgba(244,252,255,1) 0%, rgba(165,169,171,1) 100%)';
  } else if (data.id === 800){
    return 'linear-gradient(0deg, rgba(244, 252, 255, 1) 0%, rgba(3, 189, 248, 1) 100%)';
  } else if (data.id > 800){
    return "linear-gradient(0deg, rgba(244,252,255,1) 0%, rgba(170,216,230,1) 100%)";
  }
}

export {getColor};