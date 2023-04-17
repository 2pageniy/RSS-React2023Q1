import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formCardsReducer from '../../../features/form-card/reducer/formCardsSlice';
import searchBarReducer from '../../../features/search-bar/reducer/searchBarSlice';
import { cardAPI } from '../../../features/card-list/services/CardService';

export const rootReducer = combineReducers({
  formCardsReducer,
  searchBarReducer,
  [cardAPI.reducerPath]: cardAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardAPI.middleware),
  });
};
