import axios from 'axios';

const API_KEY = '5d3758853e6539520ea55b64881560d2'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER' //Create a variable to have consistency for action types in actionCreator and reducer

function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export default fetchWeather;