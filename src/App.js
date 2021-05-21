import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/companies" component={Companies} />
          <Route path="/chat" component={Conversation} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
