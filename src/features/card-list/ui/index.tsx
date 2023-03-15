import React, { Component } from 'react';
import { Card } from '../../../entities';
import cl from './style.module.css';
import { cardList } from '../consts';

export class CardList extends Component {
  render() {
    return (
      <div className={cl['card-list']}>
        {cardList.map((card) => (
          <Card
            key={card.date}
            img={card.img}
            title={card.title}
            creator={card.creator}
            tags={card.tags}
            date={card.date}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
