import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "22cfe9cd002da5a28867d9b6a3df0cf0";

export const fetchWeather = async ( query ) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data;
}