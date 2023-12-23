import { FC } from 'react';
import { AuthTitle } from '../../../enums/auth-title.enum';
import LoginForm from './components/LoginForm';
import AuthPageWrapper from '../../../shared/layouts/AuthPageWrapper/AuthPageWrapper';
import { Link } from 'react-router-dom';
import { Route } from '../../../enums/routes.enum';

const LoginPage: FC = () => {
    return (
      <AuthPageWrapper title={AuthTitle.Login}>
        <LoginForm />
        <p className='auth-link'>
          Don't have an account? <Link to={Route.SignUp}>Create an account</Link>
        </p>
      </AuthPageWrapper>
    );
}

export default LoginPage;