import {FETCH_WEATHER} from '../actions/index';
import {CLEAR_CITY} from '../actions/clear_city';

function forecast(state = null, action){
    switch(action.type){
        case FETCH_WEATHER:
            return action.payload.data;
        
        case CLEAR_CITY:
            state = null;
            return state; 
        //return [action.payload.data, ...state] returns [olddata, olddata, newdata] NOT [olddata [newdata]]

    }
    return state;
}

export default forecast;