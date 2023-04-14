import React, { FC } from 'react';
import { CardList, FormCard } from '../../../features';
import { ICard } from '../../../entities/card/interface';
import { useAppSelector } from '../../../shared/hooks/redux';

export const MainForm: FC = () => {
  const formCards: ICard[] = useAppSelector((state) => state.formCardsReducer.cards);

  return (
    <>
      <FormCard />
      <CardList cards={formCards} />
    </>
  );
};

export default MainForm;
