import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import Auth from './components/HOC/Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/signin' />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route
          path='/todo'
          element={
            <Auth>
              <Todo />
            </Auth>
          }
        ></Route>
        <Route path='*' element={<Navigate to='/todo' />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
