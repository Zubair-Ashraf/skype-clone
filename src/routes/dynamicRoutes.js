import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "context";

function DynamicRoutes({ component, authenticated, guest, ...props }) {
  const { user } = useAuthState();

  if (authenticated && !user) {
    return <Redirect to="/login" />;
  } else if (guest && user) {
    return <Redirect to="/" />;
  } else {
    return <Route component={component} {...props} />;
  }
}

export default DynamicRoutes;
