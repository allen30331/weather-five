import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

//Combines reducer
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
