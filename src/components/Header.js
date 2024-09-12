import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Movie Box</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;