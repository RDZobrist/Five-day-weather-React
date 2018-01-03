import axios from 'axios';
const API_KEY = 'a6507667f83dc986fee5d4eafd70512d';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (cityName){

    const url = `${ROOT_URL}&q=${cityName},us`
    const request = axios.get(url);


    return{
        type: 'FETCH_WEATHER',
        payload: request
    };
}