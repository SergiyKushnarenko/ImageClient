import axios from '../../api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from '../action-types.enum';
import { FavouritesApi } from '../../api/api-urls';
import { Favourite } from '../../types/favourite.type';

export const getAllFavourites = createAsyncThunk(ActionTypes.GetFavouriteImages, async (): Promise<Favourite[]> => {
  try {
    const { data } = await axios.get(FavouritesApi.GetAllFavourites);
    return data;
  } catch (error) {
    console.error('error during getting favourites', error);
    throw error;
  }
});

export const addToFavourites = createAsyncThunk(ActionTypes.AddToFavourite, async (imageId: number): Promise<Favourite> => {
  try {
    const { data } = await axios.post(FavouritesApi.AddToFavourite, null, { params: { imageId } });
    return data;
  } catch (error) {
    console.error('error during adding to favourites', error);
    throw error;
  }
});


export const removeFromFavourites = createAsyncThunk(
  ActionTypes.RemoveFromFavourite,
  async (imageId: number): Promise<Favourite> => {
    try {
      const { data } = await axios.delete(FavouritesApi.RemoveFromFavourites, { params: { imageId } });
      return data;
    } catch (error) {
      console.error('error during removing from favourites', error);
      throw error;
    }
  }
);
