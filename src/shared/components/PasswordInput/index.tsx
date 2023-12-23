import { FC, ChangeEvent } from 'react';
import Input from '../Input';

type PasswordInputProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: FC<PasswordInputProps> = ({ value, onChange }) => {
  return <Input placeholder='Enter your password' label="Password" name="password" type="password" value={value} onChange={onChange} />;
};

export default PasswordInput;