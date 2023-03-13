import React, { Component } from 'react';
import cl from './style.module.css';

interface InputProps {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

export class Input extends Component<InputProps> {
  render() {
    return (
      <input
        type={this.props.type || 'text'}
        className={cl.input}
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
