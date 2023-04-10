import React from 'react';
import { describe, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardList } from './';

describe('card list', () => {
  let cardList: Promise<HTMLDivElement>;
  let card: Promise<HTMLElement[]>;
  beforeEach(() => {
    render(<CardList />);
    card = screen.findAllByTestId('card-mini-section');
    cardList = screen.findByTestId('card-list');
  });

  test('render card list', async () => {
    expect(await cardList).toBeInTheDocument();
  });

  test('render mini card', async () => {
    expect((await card).length).toBeGreaterThan(0);
  });

  test('click mini card', async () => {
    fireEvent.click((await card)[0]);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('card-section')).toBeInTheDocument();

    const iconClose = screen.getByTestId('icon-close');
    fireEvent.click(iconClose);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    expect(screen.queryByTestId('card-section')).not.toBeInTheDocument();
  });
});
