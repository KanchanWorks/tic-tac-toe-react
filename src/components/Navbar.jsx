import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link 
            to="/tic-tac-toe-react" 
            className={location.pathname === '/tic-tac-toe-react' ? 'active' : ''}
          >
            Tic-Tac-Toe
          </Link>
        </li>
        <li>
          <Link 
            to="/calculator" 
            className={location.pathname === '/calculator' ? 'active' : ''}
          >
            Calculator
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
