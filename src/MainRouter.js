import React, { memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/dashboard/Dashboard'

const MainRouter = (props) => {
  return (
      <Router>
          <Switch>
              <Route path="/" component={ SignUp } exact />
              <Route path="/dashboard" component={ Dashboard } exact />
          </Switch>
      </Router>
  )
}

export default memo(MainRouter)
