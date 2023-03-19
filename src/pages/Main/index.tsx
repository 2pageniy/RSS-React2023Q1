import React, { Component } from 'react';
import { CardList, SearchBar } from '../../features';

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
