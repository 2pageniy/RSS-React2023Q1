import React from 'react';
import cl from './style.module.css';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../../shared/types/interface';
import { InputProps } from './interface';

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & Partial<ReturnType<UseFormRegister<IFormValues>>>
>(({ upText, rightText, warningText, handler, ...props }, ref) => {
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
        onChange={handler}
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
