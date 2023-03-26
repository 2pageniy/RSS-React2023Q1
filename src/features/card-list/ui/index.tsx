import React, { Component } from 'react';
import { Card } from '../../../entities';
import cl from './style.module.css';
import { cardList } from '../consts';
import { ICard } from 'entities/card/interface';

interface CardListProps {
  cards?: ICard[];
}

export class CardList extends Component<CardListProps> {
  shouldComponentUpdate(nextProps: Readonly<CardListProps>): boolean {
    if (this.props.cards?.length !== nextProps.cards?.length) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className={cl['card-list']} data-testid="card-list">
        {(this.props.cards === undefined ? cardList : this.props.cards).map((card) => (
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
  }
}

export default CardList;
