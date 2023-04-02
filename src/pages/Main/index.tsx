import React, { FC } from 'react';
import { CardList, SearchBar } from '../../features';

export const Main: FC = () => {
  return (
    <div>
      <SearchBar />
      <CardList />
    </div>
  );
};

export default Main;
