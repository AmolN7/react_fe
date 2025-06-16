import { react, useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="container">
            <h1>Contact us</h1>
            <div className="row">
                <div className="col-md-6  border p-4 rounded">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
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