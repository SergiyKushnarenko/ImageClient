import { FC } from 'react';
import Button from '../Button';

import './styles.scss';

type PageHeaderProps = {
  title: string;
  buttonText: string;
  onClick: () => void;
};

const PageHeader: FC<PageHeaderProps> = ({ title, buttonText, onClick }) => {
  return (
    <div className='page-header'>
      <h1>{title}</h1>
      <Button text={buttonText} onClick={onClick} />
    </div>
  );
};

export default PageHeader;