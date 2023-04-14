import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './ui';
import { restrictCharacters } from './lib/restrict-characters';

const dataCard = {
  img: '',
  title: 'privet',
  gender: 'denis',
  country: 'Russia',
  tags: ['design', 'graphic'],
  date: '22/03/26',
};

describe('card', () => {
  let card: HTMLElement;
  let img: HTMLImageElement;
  let title: HTMLParagraphElement;
  let name: HTMLSpanElement;
  let tags: HTMLParagraphElement;
  let date: HTMLParagraphElement;
  beforeEach(() => {
    render(
      <Card
        image={dataCard.img}
        name={dataCard.title}
        species={dataCard.gender}
        location={dataCard.country}
        episode={dataCard.tags}
        created={dataCard.date}
      />
    );
    card = screen.getByTestId('card-section');
    img = screen.getByTestId('card-img');
    title = screen.getByTestId('card-title');
    name = screen.getByTestId('card-name');
    tags = screen.getByTestId('card-tags');
    date = screen.getByTestId('card-date');
  });

  test('render card', () => {
    expect(card).toBeInTheDocument();
  });

  test('render description card', () => {
    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(tags).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  test('should match fields of the object data', () => {
    expect(title.textContent).toBe(dataCard.title);
    expect(name.textContent).toBe(dataCard.gender);
    expect(tags.textContent).toBe(restrictCharacters(dataCard.tags));
    expect(date.textContent).toBe(`Added on ${dataCard.date}`);
  });
});

describe('restrict characters', () => {
  test('s kaifom', () => {
    const tags = ['Art deisgun', 'animation', 'privet', 'kad dela'];
    expect(restrictCharacters(tags)).toEqual('Art deisgun, animation, privet, kad dela');
  });

  test('bez kaifom', () => {
    const tags = ['Art deisgun', 'animation', 'privet', 'kad dela', 'zdarovchik', 'ny ladno'];
    expect(restrictCharacters(tags)).toEqual('Art deisgun, animation, privet, kad dela...');
  });
});
