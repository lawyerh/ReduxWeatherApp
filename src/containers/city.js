import React, {Component} from 'react';
import { connect } from 'react-redux';
import  pinCity from '../actions/pin_city';
import { bindActionCreators } from "redux";
import renderWeather from '../actions/genTable';

class City extends Component{
    constructor(props){
        super(props);
        
        this.pin = this.pin.bind(this);
    }

    pin(){
        console.log("**************** PINNING!")
        if(!this.props.forecast){
            return;
        }

        else{
            this.props.pinCity(this.props.forecast)
        }
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
                                <button
                                onClick={this.pin}
                                className='btn btn-sm btn-primary'>Pin this city</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderWeather(this.props.forecast)}
                    </tbody>
                </table>
            );
        }
        return(
            <h3 className='text-center'>Please search for a city!</h3>
        );
    }
}

function mapStateToProps({forecast}){ // {forecast === state.forecast} since state has a key called forecast.
    return{ forecast }; // {forecast} === {forecast: forecast}
};

function mapDispatchToProps(dispatch){
    return bindActionCreators( { pinCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);