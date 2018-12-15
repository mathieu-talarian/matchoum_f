import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  Grid,
  Container,
  Header,
  Segment,
  Icon,
  Menu,
  Divider
} from 'semantic-ui-react'
import _ from 'lodash'
import { push } from 'connected-react-router'
import ProfilHomePage from './ProfilHomePage'
import AccountSettingsPage from './AccountSettingsPage'
import LikesPage from './LikesPage'
import MessagePage from './MessagePage'

// import * as profileActions from '../../actions/profile'
import { Switch, Route } from 'react-router-dom'

class ProfilPage extends Component {
  static propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    hasInfos: PropTypes.bool.isRequired,
    profile: PropTypes.shape({}).isRequired,
    add: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.push('/' + name)
  }
  menuProps = { icon: true, size: 'large', pointing: true, secondary: true }
  menuPropsF = matches =>
    matches ? this.menuProps : { ...this.menuProps, vertical: true }

  componentDidMount() {
    // this.props.get()
  }

  //   add = data => this.props.add(data)
  //   update = data => this.props.update(data)
  //   submit = data => (!this.props.hasInfos ? this.add(data) : this.update(data))
  render() {
    const { activeItem } = this.state
    return (
      <Grid columns={2}>
        <Grid.Column width={4}>
          <Menu {...this.menuPropsF(false)}>
            <Menu.Item
              name="profil/home"
              active={activeItem === 'profil/home'}
              onClick={this.handleItemClick}
            >
              <Icon name="home" />
            </Menu.Item>
            <Menu.Item
              name="profil/messages"
              active={activeItem === 'profil/messages'}
              onClick={this.handleItemClick}
            >
              <Icon name="mail" />
            </Menu.Item>
            <Menu.Item
              name="profil/likes"
              active={activeItem === 'profil/likes'}
              onClick={this.handleItemClick}
            >
              <Icon name="like" color="red" />
            </Menu.Item>{' '}
            <Menu.Item
              name="profil/settings"
              active={activeItem === 'profil/settings'}
              onClick={this.handleItemClick}
            >
              <Icon name="settings" />
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Switch>
            <Route path="/profil/home" exact component={ProfilHomePage} />
            <Route path="/profil/messages" exact component={MessagePage} />
            <Route path="/profil/likes" exact component={LikesPage} />
            <Route
              path="/profil/settings"
              exact
              component={AccountSettingsPage}
            />
            <Redirect to={'profil/home'} exact />
          </Switch>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  isConfirmed: !!state.user.confirmed,
  hasInfos: !_.isEmpty(state.profile),
  profile: state.profile,
  user: state.user
})

const mapDispatchToProps = {
  //   add: profileActions.add,
  //   get: profileActions.get,
  //   update: profileActions.update
}

export default connect(
  mapStateToProps,
  { push }
)(ProfilPage)
