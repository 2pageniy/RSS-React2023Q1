import React, { Component } from 'react';
import { Button, Input } from '../../../shared/ui';
import cl from './style.module.css';

export class SearchBar extends Component<Record<string, never>, { searchText: string }> {
  state = {
    searchText: '',
  };

  componentDidMount() {
    const localSearchBar = localStorage.getItem('searchBar');
    if (localSearchBar) {
      this.setState({ searchText: localSearchBar });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchBar', this.state.searchText);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.target.value });
  };

  handleClick = () => {
    console.log(this.state.searchText);
  };

  render() {
    return (
      <div className={cl['search-bar']} data-testid={'search-bar'}>
        <Input placeholder="Search" value={this.state.searchText} onChange={this.handleChange} />
        <Button onClick={this.handleClick}>Search</Button>
      </div>
    );
  }
}

export default SearchBar;
