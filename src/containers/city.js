import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart";
import Map from "../components/map";

class City extends Component{
    constructor(props){
        super(props);
        if(this.props.forecast){
            console.log(this.props.forecast);
        }
    }

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const {lon, lat} = cityData.city.coord;
        console.log(temps)
        return(
            <tr className='mb-2'>
                <td><Map lon={lon} lat={lat} /></td>
                <td><Chart height={100} width={100} data={temps} color={'red'} type=' Kelvins'/></td>
                <td><Chart height={100} width={100} data={pressures} color={'blue'} type=' hPa'/></td>
                <td><Chart height={100} width={100} data={humidities} color={'green'} type='%'/></td>
            </tr>
        );
    }

    // ********* RENDER METHOD ********** //
    
    render(){
        if(this.props.forecast){
            console.log(this.props.forecast);
            return(
                <table className='table table-hover table-striped'>
                    <thead>
                        <tr>
                            <th>
                                City
                            </th>
    
                            <th>
                                Temperature
                            </th>
    
                            <th>
                                Pressure
                            </th>
    
                            <th>
                                Humidity
                            </th>

                            <th>
                                <button className='btn btn-sm btn-primary'>Pin this city</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderWeather(this.props.forecast)}
                    </tbody>
                </table>
            );
        }
        return(
            <h3>Please search for a city!</h3>
        );
    }
}

function mapStateToProps({forecast}){ // {forecast === state.forecast} since state has a key called forecast.
    return{ forecast }; // {forecast} === {forecast: forecast}
};

export default connect(mapStateToProps)(City);