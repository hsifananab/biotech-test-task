import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  let auth = { token: localStorage.getItem('emailData') };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};
