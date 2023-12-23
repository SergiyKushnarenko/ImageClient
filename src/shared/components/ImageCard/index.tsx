import { FC } from 'react';
import { ImageItem } from '../../../types/image.type';
import Button from '../Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addToFavourites, removeFromFavourites } from '../../../store/favourites-service/actions';
import './styles.scss';

type ImageCardProps = {
  image: ImageItem;
  isFavourite?: boolean;
};

const ImageCard: FC<ImageCardProps> = ({ image, isFavourite = false }) => {
  const dispatch = useAppDispatch();
  
  const handleAddToFavourite = () => {
    dispatch(addToFavourites(image.id));
  };

  const handleRemoveFromFavourite = () => {
    dispatch(removeFromFavourites(image.id));
  };

  return (
    <div className="image-card">
      <img className="image-card__img" src={image.url} />
      <h2 className="image-card__title">{image.title}</h2>
      <a className="image-card__link button" href={image.sourceUrl} target="_blank">
        Check out source
      </a>
      {isFavourite ?
        <Button onClick={handleRemoveFromFavourite} text="Remove from favourites" />
        :<Button onClick={handleAddToFavourite} text="Add to favourites" />}
    </div>
  );
};

export default ImageCard;
