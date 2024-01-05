import { FC, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AuthPageWrapper from '../../../shared/layouts/AuthPageWrapper/AuthPageWrapper';
import { Link } from 'react-router-dom';
import { Route } from '../../../enums/routes.enum';
import storageService from '../../../utils/storage.service';
import { AuthTitle } from '../../../enums/auth-title.enum';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { googleLoginSendCode } from '../../../store/user-service/actions';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const sessionId = storageService.getItem("SessionId");

  const handleSendGoogleCode = async () => {
   if(code && sessionId){
    await dispatch(googleLoginSendCode({url:code , sessionId})).unwrap();
    navigate(Route.Home);
   }
  }

  useEffect(() => {
    handleSendGoogleCode()
  }, [location, navigate]);

  return (
    <AuthPageWrapper title={AuthTitle.Login}>
      <LoginForm />
      <p className='auth-link'>
        Don't have an account? <Link to={Route.SignUp}>Create an account</Link>
      </p>
    </AuthPageWrapper>
  );
};

export default LoginPage;