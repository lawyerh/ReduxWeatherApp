import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import City from '../containers/city';
import CityList from '../containers/cities_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <City />
        <CityList />
      </div>
    );
  }
}
