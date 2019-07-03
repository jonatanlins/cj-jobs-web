import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Job from './pages/Job';
import NewJob from './pages/NewJob';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/jobs/new" component={NewJob} />
      <Route exact path="/jobs/:id" component={Job} />
    </Switch>
  );
}

export default Routes;
