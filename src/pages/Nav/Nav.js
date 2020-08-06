import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const navLinkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <nav>
            <Link to="/" style={navLinkStyle}>
                <h3>SchlauHaus</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/temperature" style={navLinkStyle}>
                    <li>Temperature</li>
                </Link>
                <Link to="/cameras" style={navLinkStyle}>
                    <li>Cameras</li>
                </Link>
                <Link to="/doors" style={navLinkStyle}>
                    <li>Doors</li>
                </Link>
                <Link to="/lights" style={navLinkStyle}>
                    <li>Lights</li>
                </Link>
                <Link to="/irrigation" style={navLinkStyle}>
                    <li>Irrigation</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
