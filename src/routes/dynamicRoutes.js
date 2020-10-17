import React from "react";
import { Redirect, Route } from "react-router-dom";

function DynamicRoutes({ component, authenticated, guest, ...props }) {
  if (authenticated && false) {
    return <Redirect to="/login" />;
  } else if (guest && false) {
    return <Redirect to="/" />;
  } else {
    return <Route component={component} {...props} />;
  }
}

export default DynamicRoutes;
