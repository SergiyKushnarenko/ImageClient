import { createSlice } from '@reduxjs/toolkit';
import storageService from '../../utils/storage.service';
import { googleLoginSendCode, login, signUp } from './actions';
import { UserState } from './types';

const initialState: UserState = {
  user: null,
  isAuth: !!storageService.getToken(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      })
      .addCase(googleLoginSendCode.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      });
  },
});

export default userSlice.reducer;
