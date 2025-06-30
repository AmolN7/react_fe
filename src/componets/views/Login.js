import { react, useState, useEffect } from 'react';
import { loginUserValidation, loginPasswordValidation } from '../../utils/standerValidations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import { setAuth, getAuth } from '../../services/services'
import { userLogin } from '../../services/userApiService';
//for redirection
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setAuthUser, loadUserFromStorage } from '../../store/features/auth/authSlice'

const Login = () => {
    const location = useLocation();
    //console.log(location);
    const { message } = location.state || {};
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        username: '',
        password: '',
    };
    const validationSchema = Yup.object({
        username: loginUserValidation,
        password: loginPasswordValidation,
    });
    const handleSubmit = async (values, { setSubmitting }) => {
        const userData = {
            username: values.username,
            password: values.password
        }
        try {
            // alert(`Username: ${values.username}, Password: ${values.password}`);
            const loginData = await userLogin('login', {});
            if (loginData && loginData.token) {
                //setAuth(loginData);
                dispatch(setAuthUser(loginData))
                dispatch(loadUserFromStorage())
                //const { isAuthSet, authData } = getAuth();
                navigate('/dashboard');
            } else {
                alert("Invalid login credentials.");
            }


        } catch (error) {
            alert("something went wrong..!")
        }
        setSubmitting(false);
    };
    return (
        <div className="container">
            <h1>Login</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded">
                    {/* The Formik code below is rewritten to match the style of your Contact.js component */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="username"
                                        placeholder="Enter email"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.username && !!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.password && !!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    );
}
export default Login;