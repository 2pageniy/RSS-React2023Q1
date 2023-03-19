import React, { Component } from 'react';
import cl from './style.module.css';
import { ButtonProps } from './interface';

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button type="button" className={cl.btn} onClick={this.props.onClick} data-testid={'btn'}>
        {this.props.children}
      </button>
    );
  }
}
