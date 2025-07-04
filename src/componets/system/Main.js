import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import PageNotFound from '../views/PageNotFound';
import Login from '../views/Login';
import Register from '../views/Register';
import Product from '../views/Product';
import Dashboard from '../views/Dashboard';
import ProductDetails from '../views/ProductDetails';
import Logout from '../views/Logout';
import Cart from '../views/Cart';
import PrivateRoute from './PrivateRoute';
const Main = (prop) => {
    return (
        <main className={prop.className}>
            <div className="container min-heght">
                <div className="row">
                    <div className="col-12">
                        <Routes>
                            <Route path="*" element={<PageNotFound />} /> {/* Fallback route to Home if no match is found */}
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/logout" element={<Logout />} />
                            {/* Private route created */}
                            <Route path="/cart" element={
                                <PrivateRoute>
                                    <Cart />
                                </PrivateRoute>
                            } />
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Main;
