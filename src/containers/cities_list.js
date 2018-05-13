import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderWeather from '../actions/genTable';


class CityList extends Component{
    constructor(props){
        super(props);
        console.log(this.props, "WHERE ARE MY PROPS")

        this.pinnedCities = [];
        this.updatePinnedCities = this.updatePinnedCities.bind(this);
    }

    updatePinnedCities = () =>{
        return this.pinnedCities = this.props.cities.map(city => renderWeather(city));
    }
    
    render(){
        return (
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
                </tr>
            </thead>
            <tbody>
                {this.updatePinnedCities()}
            </tbody>
        </table>
        )
    }
}

function mapStateToProps({ cities }){
    return { cities };
}

export default connect(mapStateToProps)(CityList);