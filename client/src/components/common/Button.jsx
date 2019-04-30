import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/scss/button.scss';

const Button = ({ content }) => (
  <button type="button" className="button">
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
