import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Menu, Dropdown, Divider } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Avatar from 'react-avatar'
import _ from 'lodash'

// import * as actions from '../../actions/auth'

const TopNavigation = ({ mail, name, logout }) => (
  <Menu secondary pointing attached='top'>
    <Menu.Item active={false}>{mail}</Menu.Item>
    <Menu.Item as={NavLink} to='/'>
      Matcha
    </Menu.Item>
    <Menu.Menu position='right'>
      <Dropdown trigger={<Avatar round name={name} size='50' />}>
        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to='/profil'>
            Profil
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to='/account'>
            Parametres de votre compte
          </Dropdown.Item>
          <Divider />
          <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
)

TopNavigation.propTypes = {
  name: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    mail: state.user.email,
    name: !_.isEmpty(state.profile)
      ? `${state.profile.firstname} ${state.profile.lastname}`
      : ``
  }
}

export default connect(
  mapStateToProps,
  {} // { logout: actions.logout }
)(TopNavigation)
