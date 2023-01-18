import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';

import { users } from './data';

import { LoginForm } from './components/LoginForm';
import { Main } from './components/Main';
import { PrivateRoute } from './components/PrivateRoute';

import OrdersPage from './pages/OrdersPage';
import { LoginPage } from './pages/LoginPage';

const App = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = details =>
    users.forEach(u => {
      if (details.email === u.email && details.password === u.password) {
        setUser({
          ...u,
        });
        setError('');
        localStorage.setItem('emailData', u.email);
        navigate('/orders');
      } else {
        setError('Invalid email or password');
      }
    });

  const logout = () => {
    setUser({ name: '', email: '' });
    setError('');
    navigate('/');
    localStorage.clear();
  };

  return (
    <>
      <Main>
        <Routes>
          <Route element={<LoginPage />}>
            <Route
              path="/"
              element={<LoginForm login={login} error={error} />}
            />
          </Route>

          <Route element={<PrivateRoute user={user} />}>
            <Route
              path="orders"
              element={<OrdersPage user={user} logout={logout} />}
            />
          </Route>
        </Routes>
      </Main>
    </>
  );
};

export default App;
