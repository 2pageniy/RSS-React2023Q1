import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from '../pages';
import './index.css';

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
