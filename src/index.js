import {getForecast, getWeather, getMyCities} from './js/fetcher';
import {userInput}                            from './js/userInput';
import {changeUnit}                           from "./js/switchUnits";

getWeather();
getForecast();
getMyCities();
userInput();
changeUnit();
