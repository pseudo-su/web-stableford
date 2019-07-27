// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { AboutMeContainer, DefaultContainer } from './Application';
import { Homepage } from './components/Homepage';
import { ProjectDetail } from './components/Projects';

const NoMatch = () => <div>No Match</div>

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/about-me" />
        <Route path="/about-me" render={() => (
          <AboutMeContainer>
            <Homepage />
          </AboutMeContainer>
        )} />

        <Route path="*" render={() => (
          <DefaultContainer>
            <Switch>
              <Route path="/project/:projectSlug" component={ProjectDetail} />
              <Route component={NoMatch} />
            </Switch>
          </DefaultContainer>
        )} />
      </Switch>
    </Router>
  );
}
