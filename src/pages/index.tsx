import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './main';
import AboutUs from './about-us';
import NotFound from './not-found';
import { RoutesEnum } from '../shared/const/routes';

class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path={RoutesEnum.Main} element={<Main />} />
        <Route path={RoutesEnum.About} element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default Routing;
