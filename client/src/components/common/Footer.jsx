import React from 'react';

import '../../styles/scss/footer.scss';

const Footer = () => (
  <footer>
    <p>
      Copyright 2019, Pie in the Sky Bakery &#183; 34 Main Street &#183;
      Springdale, VT &#183;
      <a href="tel:802-555-7437"> (802) 555-PIES</a>
    </p>
    <p>
      <a
        href="http://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="client/src/images/twitter1.png" alt="Twitter." />
      </a>
      <a
        href="http://www.pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="client/src/images/pin2.png" alt="Pinterest." />
      </a>
      <a href="http://www.tumblr.com" target="_blank" rel="noopener noreferrer">
        <img src="client/src/images/tumblr3.png" alt="Tumblr." />
      </a>
      <a
        href="http://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="client/src/images/insta4.png" alt="Instagram." />
      </a>
      <a
        href="http://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="client/src/images/fb5.png" alt="Facebook." />
      </a>
    </p>
  </footer>
);

export default Footer;
