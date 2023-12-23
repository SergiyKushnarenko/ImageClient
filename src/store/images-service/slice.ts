import { createSlice } from '@reduxjs/toolkit';
import { getImages } from './actions';
import { ImagesState } from './types';

const initialState: ImagesState = {
  images: null,
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImages.fulfilled, (state, { payload }) => {
      if (payload.pageNumber === 1) {
        state.images = payload;
      } else if (state.images) {
        state.images = { ...payload, pageData: [...state.images.pageData, ...payload.pageData] };
      } 
    });
  },
});

export default imagesSlice.reducer;
