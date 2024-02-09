import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;