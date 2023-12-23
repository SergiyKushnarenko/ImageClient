import { FC, useEffect, useMemo, useState } from 'react';
import { useLoading } from '../../shared/hooks/useLoading';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { getImages } from '../../store/images-service/actions';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { selectImages, selectImagesPageCount } from '../../store/images-service/selector';
import ImagesList from '../../shared/components/ImagesList';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../shared/components/Header';
import { Route } from '../../enums/routes.enum';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, startLoading } = useLoading();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = useAppSelector(selectImagesPageCount) ?? 1;
  const imageList = useAppSelector(selectImages) ?? [];

  const query = useMemo(
    () => ({
      pageSize: 10,
      pageNumber: page,
      ascSort: true,
    }),
    [page]
  );

  const handleScrollList = () => {
    if (!isLoading && page !== totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handleGetImages = async () => {
    startLoading(async () => {
      await dispatch(getImages(query)).unwrap();
    });
  };

  const handleGoToFavourites = async () => {
    navigate(Route.Favourites);
  };

  useEffect(() => {
    if (!isLoading) {
      handleGetImages();
    }
  }, [query]);

  return (
    <div className="page-container">
      <PageHeader title="Images" buttonText="Go to favourites" onClick={handleGoToFavourites} />
      <ImagesList onScroll={handleScrollList} imageList={imageList} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
