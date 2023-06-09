import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import { Auth, NonAuth } from './components/HOC/Auth';
import Layout from './components/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/signin' />}></Route>
          <Route
            path='/signup'
            element={
              <NonAuth>
                <SignUp />
              </NonAuth>
            }
          ></Route>
          <Route
            path='/signin'
            element={
              <NonAuth>
                <SignIn />
              </NonAuth>
            }
          ></Route>
          <Route
            path='/todo'
            element={
              <Auth>
                <Todo />
              </Auth>
            }
          ></Route>
          <Route path='*' element={<Navigate to='/todo' />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
