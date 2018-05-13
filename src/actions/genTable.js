import React from 'react';
import Chart from "../components/chart";
import Map from "../components/map";

function renderWeather(cityData) {

    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const {lon, lat} = cityData.city.coord;
    const map = <Map lat={lat} lon={lon} />
    return(
        <tr className='mb-2' key={cityData.city.id}>
            <td>{map}</td>
            <td><Chart height={100} width={100} data={temps} color={'red'} type=' Kelvins'/></td>
            <td><Chart height={100} width={100} data={pressures} color={'blue'} type=' hPa'/></td>
            <td><Chart height={100} width={100} data={humidities} color={'green'} type='%'/></td>
            <td><div></div></td>
        </tr>
    );
}

export default renderWeather;