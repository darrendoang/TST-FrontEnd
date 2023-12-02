// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // User is not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};
export default PrivateRoute;
