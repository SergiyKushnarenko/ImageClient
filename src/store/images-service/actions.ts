import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from '../action-types.enum';
import { GetImagesDto, GetImagesResponse } from './types';
import axios from '../../api/axios';
import { ImagesApi } from '../../api/api-urls';

export const getImages = createAsyncThunk(
  ActionTypes.GetImages,
  async (dto: GetImagesDto): Promise<GetImagesResponse> => {
    try {
      const { data } = await axios.post(ImagesApi.GetImages, dto);
      return data;
    } catch (error) {
      console.error('error during getting images', error);
      throw error;
    }
  }
);
