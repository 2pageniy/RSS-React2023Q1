import React from 'react';
import cl from './style.module.css';
import { InputProps } from './interface';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../../shared/types/interface';

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<IFormValues>>
>(({ upText, rightText, warningText, ...props }, ref) => {
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
        ref={ref}
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
});
