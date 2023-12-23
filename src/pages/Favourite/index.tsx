import { FC, useEffect } from 'react';
import ImagesList from '../../shared/components/ImagesList';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { selectFavourites } from '../../store/favourites-service/selector';
import { doNothing } from '../../utils/do-nothing';
import { getAllFavourites } from '../../store/favourites-service/actions';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { useLoading } from '../../shared/hooks/useLoading';
import PageHeader from '../../shared/components/Header';
import { useNavigate } from 'react-router-dom';
import { Route } from '../../enums/routes.enum';

const FavouritePage: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

  const favourites = useAppSelector(selectFavourites) ?? [];
  const { isLoading, startLoading } = useLoading();

  const handleBackToList = () => {
    navigate(Route.Home);
  };

  const handleGetFavourites = async () => {
    dispatch(getAllFavourites());
  };

  useEffect(() => {
    startLoading(handleGetFavourites);
  }, []);

  return (
    <div className="page-container">
      {isLoading ? (
        <p>is Loading....</p>
      ) : (
        <>
          <PageHeader title="Favourites" buttonText="Back to list" onClick={handleBackToList} />
          <ImagesList isFavourite imageList={favourites} onScroll={doNothing} />
        </>
      )}
    </div>
  );
};

export default FavouritePage;
