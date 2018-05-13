export const CLEAR_CITY = 'CLEAR_CITY';

function clearCity(){
    return{
        type: CLEAR_CITY,
        payload: []
    }
}

export default clearCity;