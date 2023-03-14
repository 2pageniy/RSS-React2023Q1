import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../widgets/header';
import Routing from '../pages';
import './index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    );
  }
}

export default App;
