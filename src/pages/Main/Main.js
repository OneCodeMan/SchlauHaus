import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import './Main.css';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Button from 'react-bootstrap/Button';

function Main() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div className="Main">
        <h1 className="pageTitle">
          SchlauHaus
        </h1>
        <div className="Categories">
          <Link to="/cameras" style={linkStyle}>
            <CategoryItem title="Cameras" color="black" />
          </Link>
          <Link to="/doors" style={linkStyle}>
            <CategoryItem title="Doors" color="brown" />
          </Link>
          <Link to="/irrigation" style={linkStyle}>
            <CategoryItem title="Irrigation" color="lightgreen" />
          </Link>
          <Link to="/lights" style={linkStyle}>
            <CategoryItem title="Lights" color="yellow" />
          </Link>
          <Link to="/temperature" style={linkStyle}>
            <CategoryItem title="Temperature" color="red" />
          </Link>
        </div>
        <hr />
        <div className="otherFunctions">
          <Link to="/intro">
            <Button variant="dark" className="link">
              Intro
            </Button>
          </Link>

          <Link to="/registration-form">
            <Button variant="dark" className="link">
              Registration Form
            </Button>
          </Link>

          <Link to="/login-form">
            <Button variant="dark" className="link">
              Login Form
            </Button>
          </Link>
        </div>
    </div>
  );
}

export default Main;
