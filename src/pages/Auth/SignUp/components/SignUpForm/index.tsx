import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Button from '../../../../../shared/components/Button';
import Input from '../../../../../shared/components/Input';
import PasswordInput from '../../../../../shared/components/PasswordInput';
import { useAppDispatch } from '../../../../../shared/hooks/useAppDispatch';
import { signUp } from '../../../../../store/user-service/actions';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../../../../shared/hooks/useLoading';
import { Route } from '../../../../../enums/routes.enum';

const SignUpForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, startLoading } = useLoading();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
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
      await dispatch(signUp({ ...formValues, userRole: 1 })).unwrap();
      navigate(Route.Home);
    });
  };
  return (
    <form className="auth-form" onSubmit={handleSubmitForm}>
      <Input
        placeholder="Enter your first name"
        label="First Name"
        value={formValues.firstName}
        onChange={handleChangeFormInput}
        name="firstName"
      />
      <Input
        placeholder="Enter your last name"
        label="Last Name"
        value={formValues.lastName}
        onChange={handleChangeFormInput}
        name="lastName"
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        value={formValues.email}
        onChange={handleChangeFormInput}
        name="email"
      />
      <PasswordInput value={formValues.password} onChange={handleChangeFormInput} />
      <Button isLoading={isLoading} type="submit" text="Submit" />
    </form>
  );
};

export default SignUpForm;
