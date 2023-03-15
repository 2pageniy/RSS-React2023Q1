import React, { Component } from 'react';
import cl from './style.module.css';
import { restrictCharacters } from '../lib/restrictСharacters';

export interface ICard {
  img: string;
  title: string;
  creator: string;
  tags: string[];
  date: string;
}
export class Card extends Component<ICard> {
  render() {
    return (
      <section className={cl.card}>
        <img src={this.props.img} alt={this.props.title} className={cl.img} width="297" />
        <div className={cl['wrapper-text']}>
          <p className={cl.title}>{this.props.title}</p>
          <p className={cl.creator}>
            Added by <span className={cl.name}>{this.props.creator}</span>
          </p>
          <p className={cl.tags}>{restrictCharacters(this.props.tags)}</p>
          <p className={cl.date}>Added on {this.props.date}</p>
        </div>
      </section>
    );
  }
}

export default Card;
