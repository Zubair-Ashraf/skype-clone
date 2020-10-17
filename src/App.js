import React from "react";
import { Route } from "routes";
import { Switch } from "react-router-dom";
import { Login, Register } from "pages";
import { ApolloProvider } from "config";
import "./App.scss";

function App() {
  return (
    <ApolloProvider>
      <Switch>
        <Route path="/register" component={Register} guest />
        <Route path="/login" component={Login} guest />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
