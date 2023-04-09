import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
  const token = localStorage.getItem('token');

  return !token ? <Navigate to='/signin' /> : <Outlet />;
};

export default Auth;
