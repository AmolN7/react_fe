
import React, { useEffect } from 'react';
import { Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { getAuth } from '../../services/services';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserFromStorage } from '../../app/features/auth/authSlice'


const Navigation = () => {
    //const { isAuthSet, authData } = getAuth();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [])
    const authUserData = useSelector((state) => state.auth)
    //alert(authUserData.token)
    //console.log('>>', JSON.stringify(authUserData))
    //console.log(isAuthSet, authData)
    const location = useLocation();
    //console.log(location);
    const { message } = location.state || {};

    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My React Client App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {authUserData.token && <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>}
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                    </ul>
                    {!authUserData.token && <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>}
                    {authUserData.token && <ul className="navbar-nav ms-auto">
                        <li className="nav-item d-flex align-items-center">
                            <Link className="nav-link position-relative" to="/cart">
                                <i className="bi bi-cart" style={{ fontSize: '1.3rem' }}></i>
                                <span className="translate-middle badge rounded-pill bg-danger start-100 " style={{ fontSize: '0.7rem' }}>
                                    0
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/logout">Logout</Link>
                        </li>
                    </ul>}
                </div>

            </div>
        </nav>
    );
}
export default Navigation;