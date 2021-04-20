import { bindActionCreators } from 'redux';
import store from '../store';

const getCityInfo = (city) => {
    return{
        type: 'GET_CITY_INFO',
        city
    }
}

const getWeatherInfo = (woeid) => {
    return{
        type: 'GET_WEATHER_INFO',
        woeid
    }
}

export const boundGetCityInfo = bindActionCreators(getCityInfo, store.dispatch);
export const boundGetWeatherInfo = bindActionCreators(getWeatherInfo, store.dispatch);
