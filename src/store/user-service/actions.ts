import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from '../action-types.enum';
import { LoginDto, SignUpDto } from './types';
import axios from '../../api/axios';
import { AuthApi } from '../../api/api-urls';
import storageService from '../../utils/storage.service';
import { User } from '../../types/user.type';

export const login = createAsyncThunk(ActionTypes.Login, async (dto: LoginDto): Promise<User> => {
  try {
    const { data } = await axios.post(AuthApi.Login, dto);
    storageService.setToken(data.jwtBearerToken);
    return data;
  } catch (error) {
    console.error('error during login', error);
    throw error;
  }
});

export const signUp = createAsyncThunk(ActionTypes.SignUp, async (dto: SignUpDto): Promise<User> => {
  try {
    const { data } = await axios.post(AuthApi.SignUp, dto);
    storageService.setToken(data.jwtBearerToken);
    return data;
  } catch (error) {
    console.error('error during sign up', error);
    throw error;
  }
});
