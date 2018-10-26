import React from "react";
import { Route, Redirect } from "react-router-dom";
import { GetUser } from '../../services/Firebase/Firebase'

import FirebaseREST from '../../services/Firebase/FirebaseREST';


export default function PrivateRoute({
  component: Component,
  ...rest
}) {

  return (
    <Route
      {...rest}
      render={props =>
        GetUser() !== null ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}