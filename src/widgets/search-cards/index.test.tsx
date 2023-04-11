import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchCards from './ui';

describe('Search Cards', () => {
  beforeEach(() => {
    render(<SearchCards />);
  });

  test('render card list', async () => {
    expect(await screen.findByTestId('card-list')).toBeInTheDocument();
  });

  test('render search bar', async () => {
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });
});
