import React from 'react'
import { connect } from 'react-redux'

import AuthRouting from './components/routing/AuthRouting'
import GuestRouting from './components/routing/GuestRouting'

import PropTypes from 'prop-types'

const App = ({ isAuthenticated, location }) => {
  isAuthenticated = true
  if (isAuthenticated) {
    return <AuthRouting location={location} />
  }
  return <GuestRouting location={location} />
  // (

  //   <div>
  //     <Route path="/" exact={true}>
  //       <Switch>
  //         <UserRoute path="/" exact={true} component={Home} />
  //         <UserRoute path="/about" exact={true} component={About} />
  //       </Switch>
  //     </Route>
  //     <Route path="/guest" exact={true} component={HomeNotId} />
  //   </div>
  // )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.email
})

export default connect(
  mapStateToProps,
  null
)(App)
