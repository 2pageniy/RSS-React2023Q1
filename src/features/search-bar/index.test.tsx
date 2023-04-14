import React from 'react';
import { describe, test, vitest } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from './';
import { setupStore } from '../../app/model/store/store';
import { Provider } from 'react-redux';

const store = setupStore();

describe('search bar', () => {
  let searchBar: HTMLDivElement;
  let input: HTMLInputElement;
  let btn: HTMLButtonElement;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    searchBar = screen.getByTestId('search-bar');
    input = screen.getByTestId('input');
    btn = screen.getByTestId('btn');
  });

  test('render search bar', () => {
    expect(searchBar).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test('type to search bar', () => {
    const randomString = `${+new Date()}`;
    fireEvent.change(input, { target: { value: randomString } });
    expect(input.value).toBe(randomString);
  });
});
