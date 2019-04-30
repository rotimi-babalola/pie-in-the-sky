import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../routes';

import '../styles/scss/app.scss';

const App = () => (
  <Router>
    <Switch>
      {routes.default.map(({ exact, path, component, id }) => (
        <Route key={id} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </Router>
);

export default App;
