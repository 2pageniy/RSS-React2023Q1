import React, { FC, useEffect, useState } from 'react';
import { Card, MiniCard } from '../../../entities';
import cl from './style.module.css';
import { CardListProps, ICardRaM } from '../interface';
import { fetchCharacters, searchCharacter } from '../api';
import { Loader } from '../../../shared/ui';
import imgClose from '../assets/close.png';

export const CardList: FC<CardListProps> = ({ cards, searchName }) => {
  const [cardList, setCardList] = useState<ICardRaM[]>([]);
  const [currentCard, setCurrentCard] = useState<ICardRaM | null>(null);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    setLoading(true);
    fetchCharacters().then((res) => {
      setCardList(res);
      setLoading(false);
    });
  };

  const handleClick = (index: number) => {
    setCurrentCard(cardList[index]);
  };

  const handleCloseModal = () => {
    setCurrentCard(null);
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (searchName) {
      setLoading(true);
      searchCharacter(searchName).then((res) => {
        setCardList(res);
        setLoading(false);
      });
    } else if (searchName === '') {
      fetch();
    }
  }, [searchName]);

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
        <div className={cl.modal} onClick={handleCloseModal} data-testid="modal">
          <div className={cl['wrapper-card']} onClick={(e) => e.stopPropagation()}>
            <Card
              image={currentCard.image}
              name={currentCard.name}
              species={currentCard.species}
              location={currentCard.location.name}
              episode={currentCard.episode.map((i) => i.slice(40))}
              created={currentCard.created}
            />
            <img
              onClick={handleCloseModal}
              className={cl['icon-close']}
              src={imgClose}
              alt="close icon"
              data-testid="icon-close"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
