import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import PropTypes from 'prop-types'
import TopNavigation from '../navigation/TopNavigation'

import MyRedirect from './MyRedirect'
import ProfilPage from '../pages/ProfilPage'
import AccountPage from '../pages/AccountPage'

const AuthRouting = ({ location }) => (
  <div>
    <TopNavigation />
    <Switch>
      <Route path='/' exact location={location} component={Home} />
      <Route location={location} path='/profil' component={ProfilPage} />
      <Route
        location={location}
        path='/account'
        exaxt
        component={AccountPage}
      />
      <Route component={MyRedirect} />
    </Switch>
  </div>
)

AuthRouting.propTypes = {
  location: PropTypes.any
}

export default AuthRouting
