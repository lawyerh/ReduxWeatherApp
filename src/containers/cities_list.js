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

    updatePinnedCities(){
        this.pinnedCities = this.props.cities.map(city => renderWeather(city));
        console.log(this.pinnedCities);
        return this.pinnedCities;
    }
    
    render(){
        if(this.props.cities.length){
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
            );
        }
        return <div></div>;
    }
}

function mapStateToProps({ cities }){
    return { cities };
}

export default connect(mapStateToProps)(CityList);