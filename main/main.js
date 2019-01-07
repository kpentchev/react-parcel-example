import React, { Suspense, lazy } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import SideNav from '~/sidenav';

//const SideNav = lazy(() => import('~/sidenav'));
const ExampleContainer = lazy(() => import('~/example-container'));

const SideNavWithRouter = withRouter(SideNav);

const Main = () => (
  <div className="content-main">
    <Suspense fallback={<div>Loading...</div>}>
      <SideNavWithRouter />
      <Switch>
        <Route exact path='/' component={props => <ExampleContainer {...props} />} />
      </Switch>
    </Suspense>
  </div>
)

export {Main};