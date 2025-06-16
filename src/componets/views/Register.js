import { react, useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const Register = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // handle registration logic here
        setSubmitting(false);
        resetForm();
    };

    // Country code options
    const countryCodes = [
        { code: '+1', country: 'United States' },
        { code: '+44', country: 'United Kingdom' },
        { code: '+91', country: 'India' },
        { code: '+61', country: 'Australia' },
        { code: '+81', country: 'Japan' },
        { code: '+49', country: 'Germany' },
        { code: '+33', country: 'France' },
        { code: '+86', country: 'China' },
        // Add more as needed
    ];

    return (
        <div className="container">
            <h1>Register</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded">
                    <Formik
                        initialValues={{
                            ...initialValues,
                            countryCode: '',
                            mobile: ''
                        }}
                        validationSchema={Yup.object({
                            ...validationSchema.fields,
                            countryCode: Yup.string()
                                .matches(/^\+\d{1,4}$/, 'Invalid country code')
                                .required('Country code is required'),
                            mobile: Yup.string()
                                .matches(/^\d{7,15}$/, 'Invalid mobile number')
                                .required('Mobile number is required')
                        })}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <Form.Group className="mb-3" controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter first name"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="firstName" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter last name"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="lastName" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="email" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formCountryCode">
                                    <Form.Label>Country Code</Form.Label>
                                    <Field
                                        as="select"
                                        name="countryCode"
                                        className="form-control"
                                    >
                                        <option value="">Select country code</option>
                                        {countryCodes.map(({ code, country }) => (
                                            <option key={code} value={code}>
                                                {code} - {country}
                                            </option>
                                        ))}
                                    </Field>
                                    <div className="text-danger">
                                        <ErrorMessage name="countryCode" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMobile">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="text"
                                        name="mobile"
                                        placeholder="Enter mobile number"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="mobile" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="password" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="confirmPassword" />
                                    </div>
                                </Form.Group>
                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    Register
                                </Button>
                            </FormikForm>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
export default Register;