import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this); //if a callback makes a reference to 'this', it may need to be bound to 'this' in order to function.

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = (e) =>
    {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) =>
    {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render(){
        return(
            <div className='container my-3'>
                <div className='row'>
                    <form onSubmit={this.onFormSubmit} className='input-group'>
                        <div className='col-8'>
                            <input 
                            className='form-control mx-auto' 
                            onChange={this.onInputChange}
                            value={this.state.term}
                            placeholder='Search for a city..' />
                        </div>
                        <div className='col-4'>
                            <button className='btn btn-success'>Search!</button>
                        </div>
                    </form>
                </div>
            </div>
        );

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

