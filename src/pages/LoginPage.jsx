import { Navigate, Outlet } from 'react-router-dom';

export const LoginPage = () => {
  let auth = { token: localStorage.getItem('emailData') };

  return auth.token ? <Navigate to="/orders" /> : <Outlet />;
};
