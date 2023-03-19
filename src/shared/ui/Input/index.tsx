import React, { Component } from 'react';
import { InputProps } from './interface';
import cl from './style.module.css';

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
