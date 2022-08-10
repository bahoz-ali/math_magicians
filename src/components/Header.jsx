import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <ul className="nav-list">
        <li className="nav__item"><a href="#">home</a></li>
        <li className="nav__item"><a href="#">Calculator</a></li>
        <li className="nav__item"><a href="#">Quote</a></li>
      </ul>
    </header>
  );
}
