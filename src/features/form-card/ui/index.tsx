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
    name,
    created,
    location,
    gender,
    tags,
    image,
  }: IFormValues) => {
    const newCard: ICard = {
      name,
      created,
      location,
      species: gender,
      episode: tags,
      image: window.URL.createObjectURL(image[0]),
    };

    addCard(newCard);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.form} data-testid="form">
        <Input
          placeholder={'Name...'}
          {...register('name', { required: true, minLength: 3 })}
          upText={'Name:'}
          warningText={errors.name && 'The name field must be more than 2 characters long'}
        />
        <Input
          type="date"
          placeholder="Created"
          {...register('created', { required: true })}
          upText={'Date added:'}
          warningText={errors.created && 'The date must be valid'}
        />
        <p>
          <label>
            Choose a country: <br />
            <select
              id="location"
              {...register('location', { required: true })}
              data-testid="select"
            >
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
          {...register('image', {
            required: true,
            validate: {
              acceptedFormats: (files) =>
                ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type),
            },
          })}
          upText={'Upload image:'}
          warningText={errors.image && 'Need to upload a photo'}
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
