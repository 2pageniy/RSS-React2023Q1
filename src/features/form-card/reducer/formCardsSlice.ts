import { ICard } from '../../../entities/card/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormCards {
  cards: ICard[];
}

const initialState: FormCards = {
  cards: [],
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<ICard>) {
      state.cards.push(action.payload);
    },
  },
});

export default formCardsSlice.reducer;
