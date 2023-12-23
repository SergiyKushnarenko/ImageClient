import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Route } from '../enums/routes.enum';
import { useAppSelector } from '../shared/hooks/useAppSelector';
import { selectIsAuthenticated } from '../store/user-service/selectors';


interface ProtectedRouteProps {
  redirectPath?: Route;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ redirectPath = Route.Login }) => {
  const isAuth = useAppSelector(selectIsAuthenticated);

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
