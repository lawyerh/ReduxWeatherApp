import React from 'react';
import Chart from "../components/chart";
import Map from "../components/map";

function renderWeather(cityData) {

    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const {lon, lat} = cityData.city.coord;
    return(
        <tr className='mb-2'>
            <td><Map lon={lon} lat={lat} /></td>
            <td><Chart height={100} width={100} data={temps} color={'red'} type=' Kelvins'/></td>
            <td><Chart height={100} width={100} data={pressures} color={'blue'} type=' hPa'/></td>
            <td><Chart height={100} width={100} data={humidities} color={'green'} type='%'/></td>
        </tr>
    );
}

export default renderWeather;