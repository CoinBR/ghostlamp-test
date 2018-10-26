import React from "react";
import { Route, Redirect } from "react-router-dom";
import { GetUser } from '../../services/Firebase/Firebase'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

export const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return GetUser() !== null ? (
        renderMergedProps(component, routeProps, rest)
      ) : (
        <Redirect to="/login" />
      );
    }}/>
  );
};

export const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}