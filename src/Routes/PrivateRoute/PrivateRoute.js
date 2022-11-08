import React from 'react';
import { authContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()
    if (loading) {
        return <div>loading.....</div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;