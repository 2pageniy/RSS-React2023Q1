import React, { Component } from 'react';
import cl from './style.module.css';
import { InputProps } from './interface';

export class Input extends Component<InputProps> {
  render() {
    return (
      <input
        type={this.props.type || 'text'}
        className={cl.input}
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
        data-testid={'input'}
      />
    );
  }
}
