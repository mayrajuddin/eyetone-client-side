import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Loader from '../../Pages/Shared/Loader/Loader';
import { authContext } from '../../AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()
    if (loading) {
        return <Loader></Loader>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;