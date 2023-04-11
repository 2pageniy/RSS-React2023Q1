import React, { useState } from 'react';
import { CardList, SearchBar } from '../../../features';

export const SearchCards = () => {
  const [searchName, setSearchName] = useState('');
  const handleSearch = (search: string) => {
    setSearchName(search);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <CardList searchName={searchName} />
    </>
  );
};

export default SearchCards;
