import React, { FC } from 'react';
import cl from './style.module.css';
import { restrictCharacters } from '../lib/restrict-characters';
import { ICard } from '../interface';

export const Card: FC<ICard> = ({ img, title, gender, country, tags, date }) => {
  return (
    <section className={cl.card} data-testid={'card-section'}>
      <img src={img} alt={title} className={cl.img} width="297" data-testid={'card-img'} />
      <div className={cl['wrapper-text']}>
        <p className={cl.title} data-testid={'card-title'}>
          {title}
        </p>
        <p className={cl.creator} data-testid={'card-creator'}>
          {'Added by '}
          <span className={cl.name} data-testid={'card-name'}>
            {gender}
          </span>
          {` from ${country}`}
        </p>
        <p className={cl.tags} data-testid={'card-tags'}>
          Episode: {restrictCharacters(tags)}
        </p>
        <p className={cl.date} data-testid={'card-date'}>
          Added on {date.slice(0, 10)}
        </p>
      </div>
    </section>
  );
};

export default Card;
