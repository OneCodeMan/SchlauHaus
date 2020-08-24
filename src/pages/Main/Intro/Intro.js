import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';
import './Intro.css';
import Button from 'react-bootstrap/Button';

function Intro() {
  return (
    <div className="Main">
        <h1 className="pageTitle">
          SchlauHaus
        </h1>
        <p className="description">
          To use SchlauHaus' services, you need to first register a user account. 
          Please click Register to do so.
        </p>
       <div className="register-buttons">
        <Link to="/registration-form">
          <Button variant="primary" className="auth-btn register-btn">
            Register
          </Button>
        </Link>
        <Link to="/login-form">
          <Button variant="secondary" className="auth-btn login-btn">
            Log in
          </Button>
        </Link>
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

export default Intro;
