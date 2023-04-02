import React, { FC } from 'react';
import cl from './style.module.css';
import { ButtonProps } from './interface';

export const Button: FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button type={type || 'button'} className={cl.btn} onClick={onClick} data-testid={'btn'}>
      {children}
    </button>
  );
};
