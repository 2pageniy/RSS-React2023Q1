import React, { FC } from 'react';
import { Button, Input } from '../../../shared/ui';
import cl from './style.module.css';
import { FormCardProps } from '../interface';
import { ICard } from '../../../entities/card/interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../../shared/types/interface';

export const FormCard: FC<FormCardProps> = ({ addCard }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = ({
    title,
    date,
    country,
    gender,
    tags,
    img,
  }: IFormValues) => {
    const newCard: ICard = {
      title,
      date,
      country,
      gender,
      tags,
      img: window.URL.createObjectURL(img[0]),
    };

    addCard(newCard);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.form} data-testid="form">
        <Input
          placeholder={'Title...'}
          {...register('title', { required: true, minLength: 3 })}
          upText={'Title:'}
          warningText={errors.title && 'The title field must be more than 2 characters long'}
        />
        <Input
          type="date"
          placeholder="date"
          {...register('date', { required: true })}
          upText={'Date added:'}
          warningText={errors.date && 'The date must be valid'}
        />
        <p>
          <label>
            Choose a country: <br />
            <select id="country" {...register('country', { required: true })} data-testid="select">
              <option value="Russia">Russia</option>
              <option value="USA">USA</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
          </label>
        </p>
        Choose a gender:
        <Input
          type="radio"
          {...register('gender', { required: true })}
          value="Male"
          rightText={'Male'}
        />
        <Input
          type="radio"
          {...register('gender')}
          value="Female"
          rightText={'Female'}
          warningText={errors.gender && 'Choose your gender'}
        />
        <p>
          Choose tags:
          <br />
          <Input
            type="checkbox"
            {...register('tags', { required: true })}
            value="Art Design"
            rightText={'Art Design'}
          />
          <Input type="checkbox" {...register('tags')} value="Animation" rightText={'Animation'} />
          <Input
            type="checkbox"
            {...register('tags')}
            value="Photography"
            rightText={'Photography'}
          />
          <Input
            type="checkbox"
            {...register('tags')}
            value="Illustration"
            rightText={'Illustration'}
            warningText={errors.tags && 'Select at least 1 tag'}
          />
        </p>
        <Input
          type="file"
          {...register('img', {
            required: true,
            validate: {
              acceptedFormats: (files) =>
                ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type),
            },
          })}
          upText={'Upload image:'}
          warningText={errors.img && 'Need to upload a photo'}
        />
        <Input
          type="checkbox"
          {...register('agreement', { required: true })}
          rightText="I won't be upset that no one will see these cards"
          warningText={errors.agreement && 'This field is required'}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default FormCard;
