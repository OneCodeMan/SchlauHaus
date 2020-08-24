import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';
import './RegistrationForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegistrationForm() {
  return (
    <div className="Main">
        <h1 className="pageTitle">
          SchlauHaus
        </h1>
       <div className="registration-form">
        <Form>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name.." />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>

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
            <Link to="/">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Link>
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

export default RegistrationForm;
