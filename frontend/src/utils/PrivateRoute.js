import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
   let {user} = useContext(AuthContext);
  return (
    <Routes>
      <Route
        {...rest}
        element={!user ? <Navigate to="/login" replace /> : children}
      />
    </Routes>
  );
};

export default PrivateRoute;
