import React from "react";
import "./App.scss";
import { Route } from "routes";
import { Login, Register } from "pages";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <Switch>
      <Route path="/register" component={Register} guest />
      <Route path="/login" component={Login} guest />
    </Switch>
  );
}

export default App;
