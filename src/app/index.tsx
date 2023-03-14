import React, { Component } from 'react';
import { Header } from '../widgets/header';
import Routing from '../pages';
import './index.css';
import { withRouter, WithRouterProps } from './providers/with-router';

class App extends Component<WithRouterProps> {
  render() {
    return (
      <>
        <Header path={this.props.location.pathname} />
        <Routing />
      </>
    );
  }
}

export default withRouter(App);
