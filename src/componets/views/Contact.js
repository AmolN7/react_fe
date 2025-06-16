import { react, useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <div className="row">
                <div className="col-md-6 border p-4 rounded">
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('Name is required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Email is required'),
                            message: Yup.string()
                                .min(10, 'Message must be at least 10 characters')
                                .required('Message is required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            resetForm();
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            errors,
                            isSubmitting,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.name && !!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.email && !!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        placeholder="Type your message"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.message && !!errors.message}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    Send Message
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="col-md-4 offset-md-2">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions, feel free to reach out to us at:</p>
                    <ul>
                        <li>Email: support@example.com</li>
                        <li>Phone: (123) 456-7890</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Contact;