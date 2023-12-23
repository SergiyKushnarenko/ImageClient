import { FC } from 'react';
import { ImageItem } from '../../../types/image.type';
import ImageCard from '../ImageCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import './styles.scss';

type ImagesListProps = {
  imageList: ImageItem[];
  onScroll: () => void;
  isFavourite?: boolean;
  isLoading?: boolean;
};

const ImagesList: FC<ImagesListProps> = ({ imageList,isLoading = false, onScroll, isFavourite = false }) => {
  const { bottomRef } = useInfiniteScroll(onScroll);
  return (
    <div className="image-list">
      {imageList?.map((image) => (
        <ImageCard isFavourite={isFavourite} key={image.id} image={image} />
      ))}
      {!isLoading && !!imageList.length && <div className="image-list__anchor" ref={bottomRef} />}
    </div>
  );
};

export default ImagesList;
