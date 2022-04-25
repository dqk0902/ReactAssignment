import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Notes />} />
        <Route exact path="/:id" component={() => <Create />} />
      </Switch>
    </Router>
  );
}

export default App;
