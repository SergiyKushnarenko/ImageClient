import { RootState } from "..";

export const selectUser = (state: RootState) => state.userStore.user;

export const selectIsAuthenticated = (state: RootState) => state.userStore.isAuth;