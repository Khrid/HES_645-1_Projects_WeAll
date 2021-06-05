import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Conversation } from "./pages/Conversation";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import { NavigationBar } from "./pages/NavigationBar";
import { useEffect, useState } from "react";
import { logged } from "./utils/helper";
import { LoginProvider } from "./services/login-context";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/companies">
              <Companies />
            </Route>
            <Route path="/chat">
              <Conversation />
            </Route>
          </Switch>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
