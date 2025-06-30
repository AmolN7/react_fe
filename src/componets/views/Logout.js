import { removeAuth } from "../../services/services"
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
import { logout } from '../../store/features/auth/authSlice'
import { useDispatch } from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    //console.log(location);
    const { message } = location.state || {};
    const navigate = useNavigate();
    //const rmAuth = removeAuth();

    useEffect(() => {
        dispatch(logout())
        navigate('/login')
    }, [])
}
export default Logout;