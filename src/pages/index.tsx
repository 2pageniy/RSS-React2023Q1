import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './main';
import AboutUs from './about-us';
import NotFound from './not-found';
import { Header } from '../widgets/header';
import { MAIN_PAGE, ABOUT_PAGE } from '../shared/const/routes';

class Routing extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path={MAIN_PAGE} element={<Main />} />
          <Route path={ABOUT_PAGE} element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default Routing;
