import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/navbar.scss';

const NavBar = () => (
  <React.Fragment>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/">Catering</Link>
        </li>
        <li>
          <Link to="/">Pie Gallery</Link>
        </li>
        <li>
          <Link to="/">History</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
    <div className="heading" />
  </React.Fragment>
);

export default NavBar;
