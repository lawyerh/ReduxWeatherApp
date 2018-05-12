import {FETCH_WEATHER} from '../actions/index';

function forecast(state = null, action){
    switch(action.type){
        case FETCH_WEATHER:
        return action.payload.data;
        //return [action.payload.data, ...state] returns [olddata, olddata, newdata] NOT [olddata [newdata]]

    }
    return state;
}

export default forecast;