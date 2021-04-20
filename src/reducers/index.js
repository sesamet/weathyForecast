import { combineReducers } from 'redux';
import weather from './weatherReducer';

const rootReducers = combineReducers({
    weather,
});

export default rootReducers;