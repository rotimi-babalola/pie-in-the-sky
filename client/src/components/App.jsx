import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './common/Header';

import '../styles/scss/app.scss';

const App = () => (
  <Router>
    <Header />
  </Router>
);

export default App;
