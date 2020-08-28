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
        <form>
          <label>First Name</label>
          <input type="text" required />

          <label>Last Name</label>
          <input type="text" required />

          <label>Email</label>
          <input type="email" required />

          <label>Confirm Email</label>
          <input type="email" required />

          <label>Password</label>
          <input type="password" required />

          <label>Confirm Password</label>
          <input type="password" required />

          <input type="submit" />
        </form>
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
