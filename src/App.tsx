import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Logo from './components/Logo';
import Error404 from './pages/Error404.bs';
import routes from './routes';

import './css/bulma.scss';

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ children }) => (
  <>
    <Logo />
    <Switch>
      {routes.map(({
        path, exact, component: C, ...rest
      }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => <C {...props} {...rest} />}
        />
      ))}
      {children}
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </>
);

export default App;
