import React, { FC, useEffect, useState } from 'react';
import { Card, MiniCard } from '../../../entities';
import cl from './style.module.css';
import { CardListProps } from '../interface';
import { api } from '../api';
import { Loader } from '../../../shared/ui';
import { ICard } from 'entities/card/interface';

interface cardram {
  name: string;
  image: string;
  episode: string[];
  location: { name: string };
  created: string;
  species: string;
}

export const CardList: FC<CardListProps> = ({ cards }) => {
  const [cardList, setCardList] = useState<cardram[]>([]);
  const [currentCard, setCurrentCard] = useState<cardram | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchingCard() {
      const res = await fetch(api);
      const json = await res.json();
      const result = json.results;
      setCardList(result);
      setLoading(false);
    }
    fetchingCard();
  }, []);

  const handleClick = (index: number) => {
    console.log(index);
    setCurrentCard(cardList[index]);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={cl['card-list']} data-testid="card-list">
      {cards
        ? cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              species={card.species}
              location={card.location}
              episode={card.episode}
              created={card.created}
            />
          ))
        : cardList.map((card, index) => (
            <div key={index} onClick={() => handleClick(index)}>
              <MiniCard image={card.image} name={card.name} />
            </div>
          ))}
      {currentCard && (
        <div className={cl.modal}>
          <Card
            image={currentCard.image}
            name={currentCard.name}
            species={currentCard.species}
            location={currentCard.location.name}
            episode={currentCard.episode}
            created={currentCard.created}
          />
        </div>
      )}
    </div>
  );
};

export default CardList;
