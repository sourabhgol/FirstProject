// Here i have declared all the routes that are necessary , here i have only two routes that
// are , one to the dashboard and one to the Home page.

import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import App from '../components/App'
import Dashboard from '../components/Dashboard'
import { history } from '../Myhistory'

export const Navigation = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/dashboard" exact strict component={Dashboard} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
}
