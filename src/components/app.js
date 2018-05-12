import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import City from '../containers/city';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <City />
      </div>
    );
  }
}
