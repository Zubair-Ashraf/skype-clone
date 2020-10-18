import React from "react";
import { Route } from "routes";
import { Switch } from "react-router-dom";
import { Login, Register, Home } from "pages";
import { ApolloProvider } from "config";
import { AuthProvider, MessageProvider } from "context";
import "./App.scss";

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <MessageProvider>
          <Switch>
            <Route exact path="/" component={Home} authenticated />
            <Route path="/register" component={Register} guest />
            <Route path="/login" component={Login} guest />
          </Switch>
        </MessageProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
