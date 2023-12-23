import { createSlice } from '@reduxjs/toolkit';
import { addToFavourites, getAllFavourites, removeFromFavourites } from './actions';
import { FavouritesState } from './types';

const initialState: FavouritesState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFavourites.fulfilled, (state, { payload }) => {
        state.favourites = payload;
      })
      .addCase(addToFavourites.fulfilled, (state, { payload }) => {
        state.favourites = [...state.favourites, payload];
      })
      .addCase(removeFromFavourites.fulfilled, (state, { payload }) => {
        state.favourites = state.favourites.filter((item) => item.id !== payload.id);
      });
  },
});

export default favouritesSlice.reducer;
