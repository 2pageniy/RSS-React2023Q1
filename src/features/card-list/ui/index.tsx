import React, { FC, useEffect, useState } from 'react';
import { Card } from '../../../entities';
import cl from './style.module.css';
import { CardListProps } from '../interface';

export const CardList: FC<CardListProps> = ({ cards }) => {
  const [cardList, setCardList] = useState<
    {
      name: string;
      image: string;
      episode: string[];
      location: { name: string };
      created: string;
      species: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchingCard() {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const json = await res.json();
      const result = json.results;
      setCardList(result);
      setLoading(false);
    }
    fetchingCard();
  }, []);

  useEffect(() => {
    console.log(cardList, loading);
  }, [cardList, loading]);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className={cl['card-list']} data-testid="card-list">
      {cardList.map((card, index) => (
        <Card
          key={index}
          img={card.image}
          title={card.name}
          gender={card.species}
          country={card.location.name}
          tags={card.episode}
          date={card.created}
        />
      ))}
    </div>
  );
};

export default CardList;
