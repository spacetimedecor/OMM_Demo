import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Switch>
          <Route path="/creative">
            Creative
          </Route>
          <Route path="/technology">
            Technology
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
