export enum AuthApi {
  Login = 'BasicBearerAuth/Login',
  SignUp = 'BasicBearerAuth/Register',
  GoogleLogin = 'GoogleOAuth/RedirectOnOAuthServer',
  GoogleLoginSendCode = 'GoogleOAuth/Code'
}

export enum ImagesApi {
  GetImages = 'Image/ListImages',
}

export enum FavouritesApi {
  RemoveFromFavourites = 'Favorite/DeleteFromFavorite',
  AddToFavourite = 'Favorite/AddToFavorite',
  GetAllFavourites = 'Favorite/GetAll/ListFavorite',
}