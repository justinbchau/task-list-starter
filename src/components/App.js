import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import TaskPage from "../pages/TaskPage";
import NotFound from "../pages/404";
import SignUp from "../pages/SignUp";
import history from "../history";
import CreateTask from "../pages/CreateTask";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={SignUp} />
          <Route path="/dashboard" exact component={TaskPage} />
          <Route path="/create" exact component={CreateTask} />
          <Route path="/404" exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
