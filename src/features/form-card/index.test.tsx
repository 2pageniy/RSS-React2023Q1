import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormCard } from './';
import { Provider } from 'react-redux';
import { setupStore } from '../../app/model/store/store';

const store = setupStore();

describe('form card', () => {
  let form: HTMLFormElement;
  let inputs: HTMLInputElement[];
  let select: HTMLSelectElement;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormCard />
      </Provider>
    );
    form = screen.getByTestId('form');
    inputs = screen.getAllByTestId('input');
    select = screen.getByTestId('select');
  });

  test('render form', () => {
    expect(form).toBeInTheDocument();
  });

  test('render input fields', () => {
    expect(inputs.length).toBeGreaterThan(6);
  });

  test('render select fields', () => {
    expect(select).toBeInTheDocument();
    expect(select.children.length).toBeGreaterThan(2);
  });
});
