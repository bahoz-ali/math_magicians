import React from 'react';
import { Link } from 'react-router-dom';
import './header_style.css';

export default function Header() {
  return (
    <header>
      <h1>Math Magicians</h1>

      <ul className="nav-list">
        <li className="nav__item">
          <Link to="/">Home</Link> |
        </li>

        <li className="nav__item">
          <Link to="/calculator">Calculator</Link> |
        </li>

        <li className="nav__item">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </header>
  );
}
