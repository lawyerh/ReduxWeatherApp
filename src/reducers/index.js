import { combineReducers } from 'redux';
import forecast from "./reducer_forecast";

const rootReducer = combineReducers({
  forecast: forecast
});

export default rootReducer;
