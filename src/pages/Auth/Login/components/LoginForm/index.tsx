import { ChangeEvent, FC, FormEvent, useState } from 'react';
import PasswordInput from '../../../../../shared/components/PasswordInput';
import Input from '../../../../../shared/components/Input';
import Button from '../../../../../shared/components/Button';
import { useAppDispatch } from '../../../../../shared/hooks/useAppDispatch';
import { login } from '../../../../../store/user-service/actions';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../../../../shared/hooks/useLoading';
import { Route } from '../../../../../enums/routes.enum';

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isLoading, startLoading } = useLoading();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChangeFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startLoading(async () => {
      await dispatch(login(formValues)).unwrap();
      navigate(Route.Home);
    });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmitForm}>
      <Input placeholder='Enter your email' label="Email" value={formValues.email} onChange={handleChangeFormInput} name="email" />
      <PasswordInput value={formValues.password} onChange={handleChangeFormInput} />
      <Button isLoading={isLoading} type="submit" text="Submit" />
    </form>
  );
};

export default LoginForm;
