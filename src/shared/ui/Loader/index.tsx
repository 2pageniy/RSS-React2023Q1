import React from 'react';
import cl from './style.module.css';

export const Loader = () => {
  return <div className={cl['lds-dual-ring']}></div>;
};
