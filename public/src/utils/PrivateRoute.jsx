import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../auth/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.isAuthenticated() === true ? (
        <Fragment>
          <Component {...props} />
        </Fragment>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
