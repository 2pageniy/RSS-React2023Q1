import { CardList } from '../../features';
import React, { Component } from 'react';
import { SearchBar } from '../../features/search-bar';

export class Main extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CardList />
      </div>
    );
  }
}

export default Main;
