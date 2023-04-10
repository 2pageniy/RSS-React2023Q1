import { ICard } from '../../entities/card/interface';

export interface CardListProps {
  cards?: ICard[];
  searchName?: string;
}

export interface ICardRaM {
  name: string;
  image: string;
  episode: string[];
  location: { name: string };
  created: string;
  species: string;
}
