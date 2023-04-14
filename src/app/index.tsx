import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Header } from '../widgets';
import Routing from '../pages';
import { withRouter, WithRouterProps } from './providers/with-router';
import './index.css';
import { setupStore } from './model/store/store';

const store = setupStore();

const App: FC<WithRouterProps> = ({ location }) => {
  return (
    <Provider store={store}>
      <Header path={location.pathname} />
      <Routing />
    </Provider>
  );
};

export default withRouter(App);
