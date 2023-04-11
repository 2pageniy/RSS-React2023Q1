import React, { FC } from 'react';
import cl from './style.module.css';
import { ICard } from '../../card/interface';

export const MiniCard: FC<Pick<ICard, 'image' | 'name'>> = ({ image, name }) => {
  return (
    <section className={cl.card} data-testid={'card-mini-section'}>
      <img src={image} alt={name} className={cl.img} width="297" data-testid={'card-img'} />
    </section>
  );
};

export default MiniCard;
