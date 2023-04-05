import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import AboutUs from './about-us';
import NotFound from './not-found';
import Form from './form';
import { RoutesEnum } from '../shared/const/routes';

const Routing: FC = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Main} element={<Main />} />
      <Route path={RoutesEnum.About} element={<AboutUs />} />
      <Route path={RoutesEnum.Form} element={<Form />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
