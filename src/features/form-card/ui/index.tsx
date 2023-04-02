import React, { FC, createRef, useState } from 'react';
import { Button, Input } from '../../../shared/ui';
import cl from './style.module.css';
import { FormCardProps, ValidFields } from '../interface';
import { ICard } from '../../../entities/card/interface';
import { useForm } from 'react-hook-form';

interface IFormInput {
  title: string;
  date: string;
  country: string;
}

export const FormCard: FC<FormCardProps> = ({ addCard }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [valid, setValid] = useState<ValidFields>({
    title: true,
    date: true,
    gender: true,
    tags: true,
    agreement: true,
    image: true,
  });

  const inputTitle = createRef<HTMLInputElement>();
  const inputDate = createRef<HTMLInputElement>();
  const inputTags = createRef<HTMLParagraphElement>();
  const select = createRef<HTMLSelectElement>();
  const inputAgreement = createRef<HTMLInputElement>();
  const inputGenderMale = createRef<HTMLInputElement>();
  const inputGenderFemale = createRef<HTMLInputElement>();
  const inputImage = createRef<HTMLInputElement>();

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const title = (inputTitle.current as HTMLInputElement).value;
    const date = (inputDate.current as HTMLInputElement).value;
    const country = (select.current as HTMLSelectElement).value;
    const genderMale = (inputGenderMale.current as HTMLInputElement).checked;
    const genderFemale = (inputGenderFemale.current as HTMLInputElement).checked;
    const gender = genderMale ? 'Male' : 'Female';
    const agreement = (inputAgreement.current as HTMLInputElement).checked;
    const image = ((inputImage.current as HTMLInputElement).files as FileList)[0];
    const blockTags = inputTags.current as HTMLParagraphElement;
    const tags: string[] = [];

    console.log(date);

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
      agreement: agreement,
      image: !!image && image.type.slice(0, 5) === 'image',
    };

    setValid(validFields);
    for (const key in validFields) {
      if (!validFields[key]) {
        return;
      }
    }

    e.currentTarget.reset();
    alert('The card was created successfully');
    const newCard: ICard = {
      title,
      date,
      country,
      gender,
      tags,
      img: window.URL.createObjectURL(image),
    };

    addCard(newCard);
  };

  return (
    <>
      <form onSubmit={submitForm} className={cl.form} data-testid="form">
        <Input
          placeholder={'Title...'}
          inputRef={inputTitle}
          upText={'Title:'}
          warningText={valid.title ? '' : 'The title field must be more than 2 characters long'}
        />
        <Input
          type="date"
          placeholder="date"
          inputRef={inputDate}
          upText={'Date added:'}
          warningText={valid.date ? '' : 'The date must be valid'}
        />
        <p>
          <label>
            Choose a country: <br />
            <select name="country" id="country" ref={select} data-testid="select">
              <option value="russia">Russia</option>
              <option value="usa">USA</option>
              <option value="china">China</option>
              <option value="japan">Japan</option>
            </select>
          </label>
        </p>
        Choose a gender:
        <Input type="radio" name="gender" inputRef={inputGenderMale} rightText={'Male'} />
        <Input
          type="radio"
          name="gender"
          inputRef={inputGenderFemale}
          rightText={'Female'}
          warningText={valid.gender ? '' : 'Choose your gender'}
        />
        <p ref={inputTags}>
          Choose tags:
          <br />
          <Input type="checkbox" rightText={'Art Design'} />
          <Input type="checkbox" rightText={'Animation'} />
          <Input type="checkbox" rightText={'Photography'} />
          <Input
            type="checkbox"
            rightText={'Illustration'}
            warningText={valid.tags ? '' : 'Select at least 1 tag'}
          />
        </p>
        <Input
          type="file"
          inputRef={inputImage}
          upText={'Upload image:'}
          warningText={valid.image ? '' : 'Need to upload a photo'}
        />
        <Input
          type="checkbox"
          inputRef={inputAgreement}
          rightText="I won't be upset that no one will see these cards"
          warningText={valid.agreement ? '' : 'Agree to the terms'}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default FormCard;
