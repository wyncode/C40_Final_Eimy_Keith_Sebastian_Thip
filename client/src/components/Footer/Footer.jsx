import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
        <ul>
          <li>
            <Link
              to="/about"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
