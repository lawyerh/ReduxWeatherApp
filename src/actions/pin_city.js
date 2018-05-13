export const PIN_CITY = 'PIN_CITY';

function pinCity(city){
    console.log("PINNING A CITY:", city)
    return{
        type: PIN_CITY,
        payload: city
    };
};

export default pinCity;