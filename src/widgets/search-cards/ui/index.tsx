import React from 'react';
import { CardList, SearchBar } from '../../../features';
import { useAppSelector } from '../../../shared/hooks/redux';

export const SearchCards = () => {
  const searchName = useAppSelector((state) => state.searchBarReducer.searchName);

  return (
    <>
      <SearchBar />
      <CardList searchName={searchName} />
    </>
  );
};

export default SearchCards;
