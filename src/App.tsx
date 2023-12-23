import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/Login';
import SignUpPage from './pages/Auth/SignUp';
import { Route as RouteEnum } from './enums/routes.enum';

import HomePage from './pages/Home';
import FavouritePage from './pages/Favourite';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteEnum.Home} element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
          <Route path={RouteEnum.Favourites} element={<FavouritePage />} />
        </Route>
        <Route path={RouteEnum.Login} element={<LoginPage />} />
        <Route path={RouteEnum.SignUp} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
