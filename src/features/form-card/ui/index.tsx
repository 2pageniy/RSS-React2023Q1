import React, { Component, createRef } from 'react';
import { Button, Input } from '../../../shared/ui';
import cl from './style.module.css';
import { FormCardProps, FormCardState, ValidFields } from '../interface';
import { ICard } from '../../../entities/card/interface';

export class FormCard extends Component<FormCardProps, FormCardState> {
  state: FormCardState = {
    valid: {
      title: true,
      date: true,
      gender: true,
      tags: true,
      agreement: true,
      image: true,
    },
  };

  private inputTitle = createRef<HTMLInputElement>();
  private inputDate = createRef<HTMLInputElement>();
  private inputTags = createRef<HTMLParagraphElement>();
  private select = createRef<HTMLSelectElement>();
  private inputAgreement = createRef<HTMLInputElement>();
  private inputGenderMale = createRef<HTMLInputElement>();
  private inputGenderFemale = createRef<HTMLInputElement>();
  private inputImage = createRef<HTMLInputElement>();

  submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const title = (this.inputTitle.current as HTMLInputElement).value;
    const date = (this.inputDate.current as HTMLInputElement).value;
    const country = (this.select.current as HTMLSelectElement).value;
    const genderMale = (this.inputGenderMale.current as HTMLInputElement).checked;
    const genderFemale = (this.inputGenderFemale.current as HTMLInputElement).checked;
    const gender = genderMale ? 'Male' : 'Female';
    const inputAgreement = (this.inputAgreement.current as HTMLInputElement).checked;
    const image = ((this.inputImage.current as HTMLInputElement).files as FileList)[0];
    const blockTags = this.inputTags.current as HTMLParagraphElement;
    const tags: string[] = [];

    for (let i = 1; i < blockTags.children.length; i++) {
      const currentLabel = blockTags.children[i] as HTMLLabelElement;
      if ((currentLabel.children[0] as HTMLInputElement).checked) {
        tags.push(currentLabel.textContent || '');
      }
    }

    const validFields: ValidFields = {
      title: title.length > 2,
      date: !!date,
      gender: genderMale || genderFemale,
      tags: !!tags.length,
      agreement: inputAgreement,
      image: !!image && image.type.slice(0, 5) === 'image',
    };

    this.setState({ valid: validFields });
    for (const key in validFields) {
      if (!validFields[key]) {
        return;
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
          <Input
            placeholder={'Title...'}
            inputRef={this.inputTitle}
            upText={'Title:'}
            warningText={
              this.state.valid.title ? '' : 'The title field must be more than 2 characters long'
            }
          />
          <Input
            type="date"
            placeholder="date"
            inputRef={this.inputDate}
            upText={'Date added:'}
            warningText={this.state.valid.date ? '' : 'The date must be valid'}
          />
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
          <Input type="radio" name="gender" inputRef={this.inputGenderMale} rightText={'Male'} />
          <Input
            type="radio"
            name="gender"
            inputRef={this.inputGenderFemale}
            rightText={'Female'}
            warningText={this.state.valid.gender ? '' : 'Choose your gender'}
          />
          <p ref={this.inputTags}>
            Choose tags:
            <br />
            <Input type="checkbox" rightText={'Art Design'} />
            <Input type="checkbox" rightText={'Animation'} />
            <Input type="checkbox" rightText={'Photography'} />
            <Input
              type="checkbox"
              rightText={'Illustration'}
              warningText={this.state.valid.tags ? '' : 'Select at least 1 tag'}
            />
          </p>
          <Input
            type="file"
            inputRef={this.inputImage}
            upText={'Upload image:'}
            warningText={this.state.valid.image ? '' : 'Need to upload a photo'}
          />
          <Input
            type="checkbox"
            inputRef={this.inputAgreement}
            rightText="I won't be upset that no one will see these cards"
            warningText={this.state.valid.agreement ? '' : 'Agree to the terms'}
          />
          <Button type="submit">Submit</Button>
        </form>
      </>
    );
  }
}

export default FormCard;
