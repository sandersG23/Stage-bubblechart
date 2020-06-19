import React from "react";
import "./App.css";
import Nav from "./Nav";
import Forcedirectedgraph from "./Forcedirectedgraph";
import Bubble from "./Bubble";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Forcedirectedgraph} />
          <Route path="/Forcedirectedgraph" component={Forcedirectedgraph} />
          <Route path="/Bubble" component={Bubble} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
