import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AuthTitle } from '../../../enums/auth-title.enum';
import SignUpForm from './components/SignUpForm';
import AuthPageWrapper from '../../../shared/layouts/AuthPageWrapper/AuthPageWrapper';
import { Route } from '../../../enums/routes.enum';

const SignUpPage: FC = () => {
  return (
    <AuthPageWrapper title={AuthTitle.SignUp}>
      <SignUpForm />
      <p className="auth-link">
        Already have an account? <Link to={Route.Login}>Login</Link>
      </p>
    </AuthPageWrapper>
  );
};

export default SignUpPage;
