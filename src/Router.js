import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/signin' />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='*' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
