import { ImageItem } from "../../types/image.type";

export type GetImagesDto = {
    ascSort: boolean;
    pageNumber: number;
    pageSize: number;
}

export type GetImagesResponse = {
    pageNumber: number;
    pageData: ImageItem[];
    totalCount: number;
    totalPageCount: number;
    isLastPage: boolean;
}

export type ImagesState = {
    images: GetImagesResponse | null;
};