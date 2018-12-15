import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import HomeLoginPage from '../pages/HomeLoginPage'
import SignupPage from '../pages/SignupPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import MyRedirect from './MyRedirect'

const GuestRouting = ({ location }) => (
  <Container>
    <Switch>
      <Route path='/' exact location={location} component={HomeLoginPage} />
      <Route path='/signup' exact location={location} component={SignupPage} />
      <Route
        location={location}
        path='/forgot_password'
        exact
        component={ForgotPasswordPage}
      />
      <Route
        location={location}
        path='/reset_password/:token'
        exact
        component={ResetPasswordPage}
      />
      <Route component={MyRedirect} />
    </Switch>
  </Container>
)

GuestRouting.propTypes = {
  location: PropTypes.any
}

export default GuestRouting
