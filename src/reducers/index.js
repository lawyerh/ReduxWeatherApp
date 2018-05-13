import { combineReducers } from 'redux';
import forecast from "./reducer_forecast";
import cities from "./reducer_cities"

const rootReducer = combineReducers({
  forecast: forecast,
  cities: cities
});

export default rootReducer;
