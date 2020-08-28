import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';
import './RegistrationForm.css';
import Button from 'react-bootstrap/Button';

function RegistrationForm() {
  return (
    <div className="Main">
        <h1 className="pageTitle">
          SchlauHaus
        </h1>
       <div className="registration-form">
        <form action="/">
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name.." required />

          <label>Last Name</label>
          <input type="text" placeholder="Enter your last name.." required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email.." required />

          <label>Confirm Email</label>
          <input type="email" placeholder="Confirm email.." required />

          <label>Password</label>
          <input type="password" placeholder="Enter password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" required />

          <div class="submit-div">
            <Button type="submit" variant="secondary" className="link">
              Register
            </Button>
          </div>
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
