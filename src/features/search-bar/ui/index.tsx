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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  useEffect(() => {
    const localSearchBar = localStorage.getItem('searchBar');
    if (localSearchBar) {
      setSearchText(localSearchBar);
      handleSearch(localSearchBar);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchBar', searchText);
    };
  }, [searchText]);

  return (
    <form className={cl['search-bar']} data-testid={'search-bar'} onSubmit={handleSubmit}>
      <Input placeholder="Search" value={searchText} handler={handleChange} />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
