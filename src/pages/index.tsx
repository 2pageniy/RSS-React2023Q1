import React, { Component, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AboutUsPage = lazy(() => import('./AboutUs'));
const NotFound = lazy(() => import('./NotFound'));

class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default Routing;
