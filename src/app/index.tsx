import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from '../pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }
}

export default App;
