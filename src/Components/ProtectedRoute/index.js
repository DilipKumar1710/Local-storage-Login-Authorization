import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const loggedIn = localStorage.getItem('isLoggedIn');

    return loggedIn ? <Outlet /> : <Navigate to="/login" />
};

export default ProtectedRoute;