import React, { Component } from 'react';
import { CardList, FormCard } from '../../../features';
import { ICard } from '../../../entities/card/interface';

interface MainFormProps {
  cards: ICard[];
}

export class MainForm extends Component {
  state: MainFormProps = {
    cards: [],
  };

  addCard = (card: ICard) => {
    console.log(1);
    this.setState({ cards: [...this.state.cards, card] });
  };

  render() {
    return (
      <>
        <FormCard addCard={this.addCard} />
        <CardList cards={this.state.cards} />
      </>
    );
  }
}

export default MainForm;
