import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { loadUserFromStorage } from '../../store/features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux';
const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [])
    const authUserData = useSelector((state) => state.auth)

    return authUserData && authUserData.token ? children : <Navigate to={"/login"} replace />;
};
export default PrivateRoute;