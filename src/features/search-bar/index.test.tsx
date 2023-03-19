import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './';

describe('search bar', () => {
  let searchBar: HTMLDivElement;
  let input: HTMLInputElement;
  let btn: HTMLButtonElement;
  beforeEach(() => {
    render(<SearchBar />);
    searchBar = screen.getByTestId('search-bar');
    input = screen.getByTestId('input');
    btn = screen.getByTestId('btn');
  });

  test('render search bar', () => {
    expect(searchBar).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
