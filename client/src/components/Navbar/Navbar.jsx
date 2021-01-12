import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../Assests/logo.png';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/buy" style={{ color: 'white', textDecoration: 'none' }}>
              Buy
            </Link>
          </li>
          <li>
            <Link to="/rent" style={{ color: 'white', textDecoration: 'none' }}>
              Rent
            </Link>
          </li>
          <li>
            <Link
              to="/manage"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Manage
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Community
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              <img className="Logo" src={Logo} alt="EstateRev"></img>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="/signin"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
