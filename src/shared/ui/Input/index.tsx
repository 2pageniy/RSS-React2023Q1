import React, { FC } from 'react';
import cl from './style.module.css';
import { InputProps } from './interface';

export const Input: FC<InputProps> = ({ inputRef, upText, rightText, warningText, ...props }) => {
  return (
    <label className={cl.label}>
      {upText && (
        <>
          <span className={cl['up-text']}>{upText}</span>
          <br />
        </>
      )}
      <input
        type={props.type || 'text'}
        className={cl.input}
        {...props}
        onChange={props.onChange}
        ref={inputRef}
        data-testid={'input'}
      />
      {rightText || ''}
      {warningText && (
        <>
          <br />
          <span className={cl.warning}>{warningText}</span>
        </>
      )}
    </label>
  );
};
