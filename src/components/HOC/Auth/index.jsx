import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const token = localStorage.getItem('token');

  return !token ? <Navigate to='/signin' /> : children;
};

export default Auth;
