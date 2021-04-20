import { 
    call, 
    put, 
    takeLatest,
    all, 
} from 'redux-saga/effects'

import { fetchAPI } from '../utils';


function* getCityInfo(action) {
    try {
        const res = yield call(fetchAPI, `location/search/?query=${action.city}`);
        yield put({ type: 'GET_CITY_INFO_SUCCESS', data: res})
    } catch (error) {
        yield put({ type: 'GET_CITY_INFO_ERROR', error })
    }
}

function* watchGetCityInfo() {
    yield takeLatest('GET_CITY_INFO', getCityInfo)
}

function* getWeatherInfo(action) {
    try {
        const res = yield call(fetchAPI, `location/${action.woeid}`);
        yield put({ type: 'GET_WEATHER_INFO_SUCCESS', data: res})
    } catch (error) {
        yield put({ type: 'GET_WEATHER_INFO_ERROR', error })
    }
}

function* watchGetWeatherInfo() {
    yield takeLatest('GET_WEATHER_INFO', getWeatherInfo)
}


export default function* weatherSaga() {
    yield all([
        watchGetCityInfo(),
        watchGetWeatherInfo()
    ])
}