import { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes, FC } from 'react';
import './styles.scss'

type InputProps = {
    type?: HTMLInputTypeAttribute;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: InputHTMLAttributes<HTMLInputElement>['value'];
    name: string;
  label: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ type = 'text', name, label, placeholder = '', ...props }) => {
  return (
      <div className="input">
       <label className="input__label" htmlFor={name}>{label}</label>
      <input placeholder={placeholder} className='input__element' name={name} type={type} {...props} />
    </div>
  );
};

export default Input;