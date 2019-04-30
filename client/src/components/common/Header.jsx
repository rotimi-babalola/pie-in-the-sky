import React from 'react';
import NavBar from './NavBar';

import '../../styles/scss/header.scss';

const Header = () => (
  <React.Fragment>
    <header>
      <a href="/">
        <img
          src="client/src/images/logo.png"
          alt="Pie in the Sky Bakery, Springdale, VT. Click for home."
        />
      </a>
    </header>
    <div className="bkdImg" />
    <NavBar />
  </React.Fragment>
);

export default Header;
