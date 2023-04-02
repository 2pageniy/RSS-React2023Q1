import React, { FC } from 'react';
import { Card } from '../../../entities';
import cl from './style.module.css';
import { cardList } from '../consts';
import { CardListProps } from '../interface';

export const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <div className={cl['card-list']} data-testid="card-list">
      {(cards === undefined ? cardList : cards).map((card) => (
        <Card
          key={card.date}
          img={card.img}
          title={card.title}
          gender={card.gender}
          country={card.country}
          tags={card.tags}
          date={card.date}
        />
      ))}
    </div>
  );
};

export default CardList;
