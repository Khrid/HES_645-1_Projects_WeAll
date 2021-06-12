import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Conversation } from "./pages/Conversation";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import { NavigationBar } from "./pages/NavigationBar";
import { LoginProvider, useIsLoggedInContext } from "./services/login-context";

import { Offers } from "./pages/Offers";

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
            <Route path="/offers" exact>
              <Offers />
           
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
