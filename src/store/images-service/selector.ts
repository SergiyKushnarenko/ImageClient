import { RootState } from "..";

export const selectImages = (state: RootState) => state.imagesStore.images?.pageData;

export const selectImagesPageCount = (state: RootState) => state.imagesStore.images?.totalPageCount;
