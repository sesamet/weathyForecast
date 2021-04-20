import { all } from 'redux-saga/effects';
import weatherSaga from './weatherSaga';

export default function* rootSagas() {
    yield all([
        weatherSaga(),
    ]);
}