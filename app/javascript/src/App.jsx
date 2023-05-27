import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import Signup from "components/Authentication/Signup";
import Dashboard from "components/Dashboard";
import PageLoader from "components/PageLoader";
import { CreateTask, ShowTask, EditTask } from "components/Tasks";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
    logger.info("App.jsx- useEffect call");
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact component={EditTask} path="/tasks/:slug/edit" />
        <Route exact component={ShowTask} path="/tasks/:slug/show" />
        <Route exact component={CreateTask} path="/tasks/create" />
        <Route exact component={Dashboard} path="/dashboard" />
        <Route exact component={Dashboard} path="/dashboard" />
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About</div>} />
        <Route exact component={Signup} path="/signup" />
      </Switch>
    </Router>
  );
};

export default App;
