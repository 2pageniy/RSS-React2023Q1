import React, { Component } from 'react';
import cl from './style.module.css';

interface ButtonProps {
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button type="button" className={cl.btn}>
        {this.props.children}
      </button>
    );
  }
}
