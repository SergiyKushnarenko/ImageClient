import { FC, PropsWithChildren } from 'react';
import { AuthTitle } from '../../../enums/auth-title.enum';
import './styles.scss';

type AuthPageWrapperProps = {
  title: AuthTitle;
};

const AuthPageWrapper: FC<PropsWithChildren<AuthPageWrapperProps>> = ({ children, title }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-wrapper__card">
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthPageWrapper;
