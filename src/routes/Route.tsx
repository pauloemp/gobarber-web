import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  const checkPrivateRoute = ({ location }: any) => {  // eslint-disable-line
    const shouldNOTRedirectUser = isPrivate === !!user;
    if (shouldNOTRedirectUser) return <Component />;

    const redirectionPath = isPrivate ? '/' : 'dashboard';
    return (
      <Redirect to={{ pathname: redirectionPath, state: { from: location } }} />
    );
  };

  return <ReactDOMRoute {...rest} render={checkPrivateRoute} />;
};

export default Route;
