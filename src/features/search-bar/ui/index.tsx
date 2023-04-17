import React, { FC, useEffect } from 'react';
import { Button, Input } from '../../../shared/ui';
import cl from './style.module.css';
import { searchBarSlice } from '../reducer/searchBarSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.searchBarReducer.searchText);
  const { changeSearch, changeSearchName } = searchBarSlice.actions;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeSearchName());
  };

  useEffect(() => {
    dispatch(changeSearchName());
  }, [changeSearchName, dispatch]);

  return (
    <form className={cl['search-bar']} data-testid={'search-bar'} onSubmit={handleSubmit}>
      <Input placeholder="Search" value={searchText} handler={handleChange} />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
