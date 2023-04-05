import React from 'react';
import { describe, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormCard } from './';

describe('form card', () => {
  let form: HTMLFormElement;
  let inputs: HTMLInputElement[];
  let select: HTMLSelectElement;
  beforeEach(() => {
    const fn = vi.fn();
    render(<FormCard addCard={fn} />);
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
