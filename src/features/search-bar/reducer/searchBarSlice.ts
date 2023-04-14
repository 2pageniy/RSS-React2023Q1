import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchBar {
  searchText: string;
  searchName: string;
}

const initialState: SearchBar = {
  searchText: '',
  searchName: '',
};

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    changeSearchName(state) {
      state.searchName = state.searchText;
    },
  },
});

export default searchBarSlice.reducer;
