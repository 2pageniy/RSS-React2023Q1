import { ICard } from '../../entities/card/interface';

export interface FormCardProps {
  addCard: (card: ICard) => void;
}

export interface ValidFields {
  [index: string]: boolean;
  title: boolean;
  date: boolean;
  gender: boolean;
  tags: boolean;
  agreement: boolean;
  image: boolean;
}

export interface FormCardState {
  valid: ValidFields;
}
