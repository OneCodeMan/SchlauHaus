import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import './Main.css';
import CategoryItem from '../../components/CategoryItem/CategoryItem';

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
    </div>
  );
}

export default Main;
