import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import {OverlayMenuItem, OverlayMenu} from "./components/OverlayMenu/OverlayMenu.component";
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
        <TopBar
          MenuOverlay={(props) =>
            <OverlayMenu {...props}>
              <OverlayMenuItem label="HOME" to="/" />
              <OverlayMenuItem label="CREATIVE" to="/creative" />
              <OverlayMenuItem label="TECHNOLOGY" to="/technology" />
            </OverlayMenu>
          }
        />
        <Hero />
        <Switch>
          <Route path="/creative">
            Creative
          </Route>
          <Route path="/technology">
            Technology
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
