import React, { FC } from 'react';
import cl from './style.module.css';
import { restrictCharacters } from '../lib/restrict-characters';
import { ICard } from '../interface';

export const Card: FC<ICard> = ({ image, name, species, location, episode, created }) => {
  return (
    <section className={cl.card} data-testid={'card-section'}>
      <img src={image} alt={name} className={cl.img} width="297" data-testid={'card-img'} />
      <div className={cl['wrapper-text']}>
        <p className={cl.title} data-testid={'card-title'}>
          {name}
        </p>
        <p className={cl.creator} data-testid={'card-creator'}>
          {'Gender '}
          <span className={cl.name} data-testid={'card-name'}>
            {species}
          </span>
          {` from ${location}`}
        </p>
        <p className={cl.tags} data-testid={'card-tags'}>
          Episode: {restrictCharacters(episode)}
        </p>
        <p className={cl.date} data-testid={'card-date'}>
          Added on {created.slice(0, 10)}
        </p>
      </div>
    </section>
  );
};

export default Card;
