import { RootState } from "..";

export const selectFavourites = (state: RootState) => state.favouritesStore.favourites;
