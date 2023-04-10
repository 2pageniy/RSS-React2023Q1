import React, { FC, useEffect, useState } from 'react';
import { Button, Input } from '../../../shared/ui';
import cl from './style.module.css';

interface SearchBarProps {
  handleSearch: (searchText: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleClick = () => {
    handleSearch(searchText);
  };

  useEffect(() => {
    const localSearchBar = localStorage.getItem('searchBar');
    if (localSearchBar) {
      setSearchText(localSearchBar);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchBar', searchText);
    };
  }, [searchText]);

  return (
    <div className={cl['search-bar']} data-testid={'search-bar'}>
      <Input placeholder="Search" value={searchText} handler={handleChange} />
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
};

export default SearchBar;
