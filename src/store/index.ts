import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userStore from './user-service/slice';
import imagesStore from './images-service/slice';
import favouritesStore from './favourites-service/slice';

export const store = configureStore({
  reducer: {
    userStore,
    imagesStore,
    favouritesStore,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
