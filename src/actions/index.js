import axios from 'axios';

const API_KEY = 'ed58696f9fce6e7fccd0129cbc885af1';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ES`;
    const request = axios.get(url);

    // console.log('Request:', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}