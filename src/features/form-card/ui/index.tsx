import React, { Component, createRef } from 'react';
import { Button, Input } from '../../../shared/ui';
import cl from './style.module.css';
import { ICard } from '../../../entities/card/interface';

interface FormCardProps {
  addCard: (card: ICard) => void;
}
export class FormCard extends Component<FormCardProps> {
  state: { cards: ICard[] } = {
    cards: [],
  };

  private inputTitle = createRef<HTMLInputElement>();
  private inputDate = createRef<HTMLInputElement>();
  private inputTags = createRef<HTMLParagraphElement>();
  private select = createRef<HTMLSelectElement>();
  private inputCheck = createRef<HTMLInputElement>();
  private inputRadio = createRef<HTMLInputElement>();
  private inputImage = createRef<HTMLInputElement>();

  submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const title = (this.inputTitle.current as HTMLInputElement).value;
    const date = (this.inputDate.current as HTMLInputElement).value;
    const country = (this.select.current as HTMLSelectElement).value;
    const gender = (this.inputRadio.current as HTMLInputElement).checked ? 'Male' : 'Female';
    const image = ((this.inputImage.current as HTMLInputElement).files as FileList)[0];
    const blockTags = this.inputTags.current as HTMLParagraphElement;

    const tags: string[] = [];

    for (let i = 1; i < blockTags.children.length; i++) {
      const currentLabel = blockTags.children[i] as HTMLLabelElement;
      if ((currentLabel.children[0] as HTMLInputElement).checked) {
        tags.push(currentLabel.textContent || '');
      }
    }
    e.currentTarget.reset();

    const newCard: ICard = {
      title,
      date,
      country,
      gender,
      tags,
      img: window.URL.createObjectURL(image),
    };

    this.props.addCard(newCard);
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitForm} className={cl.form}>
          <Input placeholder={'Title...'} inputRef={this.inputTitle} upText={'Title:'} />
          <Input type="date" placeholder="date" inputRef={this.inputDate} upText={'Date:'} />
          <p>
            <label>
              Choose a country: <br />
              <select name="country" id="country" ref={this.select}>
                <option value="russia">Russia</option>
                <option value="usa">USA</option>
                <option value="china">China</option>
                <option value="japan">Japan</option>
              </select>
            </label>
          </p>
          Choose a gender:
          <Input type="radio" name="gender" inputRef={this.inputRadio} rightText={'Male'} />
          <Input type="radio" name="gender" rightText={'Female'} />
          <p ref={this.inputTags}>
            Choose a tags:
            <br />
            <Input type="checkbox" inputRef={this.inputCheck} rightText={'Art Design'} />
            <Input type="checkbox" inputRef={this.inputCheck} rightText={'Animation'} />
            <Input type="checkbox" inputRef={this.inputCheck} rightText={'Photography'} />
            <Input type="checkbox" inputRef={this.inputCheck} rightText={'Illustration'} />
          </p>
          <Input
            type="checkbox"
            inputRef={this.inputCheck}
            rightText="I won't be upset that no one will see these cards"
          />
          <Input type="file" inputRef={this.inputImage} />
          <Button type="submit">Submit</Button>
        </form>
      </>
    );
  }
}

export default FormCard;
