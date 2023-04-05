import React, { FC, useState } from 'react';
import { CardList, FormCard } from '../../../features';
import { ICard } from '../../../entities/card/interface';

export const MainForm: FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  const addCard = (card: ICard) => {
    setCards((prev) => [...prev, card]);
  };

  return (
    <>
      <FormCard addCard={addCard} />
      <CardList cards={cards} />
    </>
  );
};

export default MainForm;
