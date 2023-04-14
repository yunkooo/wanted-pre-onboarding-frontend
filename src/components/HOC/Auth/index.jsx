import { Navigate } from 'react-router-dom';

export const Auth = ({ children }) => {
  const token = localStorage.getItem('token');

  return !token ? <Navigate to='/signin' /> : children;
};

export const NonAuth = ({ children }) => {
  const token = localStorage.getItem('token');

  return !token ? children : <Navigate to='/todo' />;
};
