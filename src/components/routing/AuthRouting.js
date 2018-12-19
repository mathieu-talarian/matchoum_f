import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Container, Segment } from 'semantic-ui-react'

import TopNavigation from '../navigation/TopNavigation'
import Home from '../pages/Home'
import MyRedirect from './MyRedirect'
import ProfilPage from '../pages/ProfilPage'
import AccountPage from '../pages/AccountPage'
import SearchSettingsPage from '../pages/SearchSettingsPage'
import LookProfilPage from '../pages/LookProfilPage'

const AuthRouting = ({ location }) => (
  <Container>
    <div>
      <TopNavigation />

      <Segment attached='bottom'>
        <Switch>
          <Route path='/' exact location={location} component={Home} />
          <Route location={location} path='/profil' component={ProfilPage} />
          <Route
            location={location}
            path='/search_settings'
            component={SearchSettingsPage}
            exact
          />
          <Route
            location={location}
            path='/account'
            exact
            component={AccountPage}
          />
          <Route
            location={location}
            path='/profile/:id'
            exact
            component={LookProfilPage}
          />
          <Route component={MyRedirect} />
        </Switch>
      </Segment>
    </div>
  </Container>
)

AuthRouting.propTypes = {
  location: PropTypes.any
}

export default AuthRouting
