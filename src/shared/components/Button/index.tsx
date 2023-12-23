import { ButtonHTMLAttributes, FC } from 'react';

import './styles.scss'

type ButtonProps = {
  text: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  isLoading?: boolean;
};

const Button: FC<ButtonProps> = ({ text, type = 'button', onClick, isLoading }) => {
  return (
    <button className='button' disabled={isLoading} type={type} onClick={onClick}>
      {isLoading ? 'Loading...' : text}
    </button>
  );
};

export default Button;
