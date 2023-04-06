import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
  const token = false;

  return !token ? <Navigate to='/signin' /> : <Outlet />;
};

export default Auth;
