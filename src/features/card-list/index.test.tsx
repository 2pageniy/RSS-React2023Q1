import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardList } from './';

describe('card list', () => {
  let cardList: HTMLDivElement;
  let card: HTMLElement[];
  beforeEach(() => {
    render(<CardList />);
    card = screen.getAllByTestId('card-section');
    cardList = screen.getByTestId('card-list');
  });

  test('render card list', () => {
    expect(cardList).toBeInTheDocument();
  });

  test('render card', () => {
    expect(card.length).toBeGreaterThan(0);
  });
});
