import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './';
import { BrowserRouter } from 'react-router-dom';

describe('header', () => {
  let heading: HTMLHeadingElement;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header path={'/'} />
      </BrowserRouter>
    );
    heading = screen.getByTestId('head');
  });

  test('render header', () => {
    expect(heading).toBeInTheDocument();
  });
});
