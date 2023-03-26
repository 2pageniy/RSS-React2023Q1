import React, { Component, createRef } from 'react';
import cl from './style.module.css';

interface Card {
  title: string;
  date: string;
  country: string;
  gender: boolean;
  image: string;
}

export class FormCard extends Component {
  state: { cards: Card[] } = {
    cards: [],
  };

  private inputTitle = createRef<HTMLInputElement>();
  private inputDate = createRef<HTMLInputElement>();
  private select = createRef<HTMLSelectElement>();
  private inputCheck = createRef<HTMLInputElement>();
  private inputRadio = createRef<HTMLInputElement>();
  private inputImage = createRef<HTMLInputElement>();

  submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const title = (this.inputTitle.current as HTMLInputElement).value;
    const date = (this.inputDate.current as HTMLInputElement).value;
    const country = (this.select.current as HTMLSelectElement).value;
    const gender = (this.inputRadio.current as HTMLInputElement).checked;
    const image = ((this.inputImage.current as HTMLInputElement).files as FileList)[0];
    e.currentTarget.reset();

    const newCard = {
      title,
      date,
      country,
      gender,
      image: window.URL.createObjectURL(image),
    };

    console.log(title, date, country, gender);

    this.setState({
      cards: [...this.state.cards, newCard],
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitForm} className={cl.form}>
          <input type="text" ref={this.inputTitle} />
          <input type="date" ref={this.inputDate} />
          <select name="country" id="country" ref={this.select}>
            <option value="russia">Russia</option>
            <option value="usa">USA</option>
            <option value="china">China</option>
            <option value="japan">Japan</option>
          </select>
          <input type="radio" name="gender" ref={this.inputRadio} />
          <input type="radio" name="gender" />
          <label htmlFor="agreement">
            I won&apos;t be upset that no one will see these cards
            <input type="checkbox" id="agreement" ref={this.inputCheck} />
          </label>
          <input type="file" ref={this.inputImage} />
          <input type="submit" />
        </form>
        {this.state.cards.map((card, index) => (
          <div key={index}>
            <img src={card.image} alt="image" />
            <p>{card.title}</p>
            <p>{card.country}</p>
            <p>{card.gender}</p>
            <p>{card.date}</p>
          </div>
        ))}
      </>
    );
  }
}

export default FormCard;
