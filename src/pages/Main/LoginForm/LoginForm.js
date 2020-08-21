import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';
import './LoginForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <div className="Main">
        <h1 className="pageTitle">
          SchlauHaus
        </h1>
        <div className="registration-form">
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
       </div>
        <hr />
        <div className="otherFunctions">
          <Link to="/">
            <Button variant="dark" className="link">
              Back to Home
            </Button>
          </Link>
        </div>
    </div>
  );
}

export default LoginForm;
