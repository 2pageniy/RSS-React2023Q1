import React, { Component } from 'react';
import { SearchBar } from '../../features/search-bar';

export class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <SearchBar />
      </div>
    );
  }
}

export default Main;
