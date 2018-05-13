import {PIN_CITY} from '../actions/pin_city';

function cities(state = [], action){ // All reducers receive state and action

    switch(action.type){ /// we check for certains actions that this specific reducer cares about
        case PIN_CITY:
            return [action.payload, ...state]; // DON'T MUTATE STATE! This will return a fresh new data structure with new state + old state
    }
    return state; // if we didn't get an action we care about, just return current state
}

export default cities;