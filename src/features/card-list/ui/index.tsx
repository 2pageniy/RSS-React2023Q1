import React, { FC, useState } from 'react';
import { Card, MiniCard } from '../../../entities';
import { Loader } from '../../../shared/ui';
import cl from './style.module.css';
import imgClose from '../assets/close.png';
import { cardAPI } from '../services/CardService';
import { CardListProps, ICardRaM } from '../interface';

export const CardList: FC<CardListProps> = ({ cards, searchName }) => {
  const [currentCard, setCurrentCard] = useState<ICardRaM | null>(null);
  const { data: { results: cardList } = {}, isLoading } = cardAPI.useFetchAllCharactersQuery(
    searchName || ''
  );

  const handleClick = (index: number) => {
    if (cardList) {
      setCurrentCard(cardList[index]);
    }
  };

  const handleCloseModal = () => {
    setCurrentCard(null);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={cl['card-list']} data-testid="card-list">
      {cards ? (
        cards.map((card, index) => (
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
      ) : cardList && cardList.length !== 0 ? (
        cardList.map((card, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            <MiniCard image={card.image} name={card.name} />
          </div>
        ))
      ) : (
        <h3>Not found cards</h3>
      )}
      {currentCard && (
        <div className={cl.modal} onClick={handleCloseModal} data-testid="modal">
          <div className={cl['wrapper-card']} onClick={(e) => e.stopPropagation()}>
            <Card
              image={currentCard.image}
              name={currentCard.name}
              species={currentCard.species}
              location={currentCard.location.name}
              episode={['Episode', ...currentCard.episode.map((i) => i.slice(40))]}
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
