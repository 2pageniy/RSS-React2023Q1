import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchCards from './ui';
import { Provider } from 'react-redux';
import { setupStore } from '../../app/model/store/store';

const store = setupStore();

describe('Search Cards', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchCards />
      </Provider>
    );
  });

  test('render card list', async () => {
    expect(await screen.findByTestId('card-list')).toBeInTheDocument();
  });

  test('render search bar', async () => {
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });
});
