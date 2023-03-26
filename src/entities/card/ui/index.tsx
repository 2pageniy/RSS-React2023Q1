import React, { Component } from 'react';
import cl from './style.module.css';
import { restrictCharacters } from '../lib/restrict-characters';
import { ICard } from '../interface';
export class Card extends Component<ICard> {
  render() {
    return (
      <section className={cl.card} data-testid={'card-section'}>
        <img
          src={this.props.img}
          alt={this.props.title}
          className={cl.img}
          width="297"
          data-testid={'card-img'}
        />
        <div className={cl['wrapper-text']}>
          <p className={cl.title} data-testid={'card-title'}>
            {this.props.title}
          </p>
          <p className={cl.creator} data-testid={'card-creator'}>
            {'Added by '}
            <span className={cl.name} data-testid={'card-name'}>
              {this.props.gender}
            </span>
            {` from ${this.props.country}`}
          </p>
          <p className={cl.tags} data-testid={'card-tags'}>
            {restrictCharacters(this.props.tags)}
          </p>
          <p className={cl.date} data-testid={'card-date'}>
            Added on {this.props.date}
          </p>
        </div>
      </section>
    );
  }
}

export default Card;
