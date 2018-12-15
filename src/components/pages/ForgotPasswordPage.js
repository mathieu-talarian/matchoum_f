import { push } from 'connected-react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message, Button, Header } from 'semantic-ui-react'
import ForgotPasswordForm from '../forms/ForgotPasswordForm'
import PropTypes from 'prop-types'

class ForgotPasswordPage extends Component {
  state = {
    success: false
  }

  submit = values => {
    console.log('====================================')
    console.log(values)
    console.log('====================================')
    this.setState({ success: true })
  }

  returnToLogin = () => this.props.p('/')

  render() {
    const { success } = this.state
    return (
      <div>
        <Button circular icon="left arrow" onClick={this.returnToLogin} />
        <Header>Mot de passe oublie ?</Header>
        {success ? (
          <Message>Un email vous a ete renvoye avec les instructions</Message>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    )
  }
}

ForgotPasswordPage.propTypes = {
  p: PropTypes.func.isRequired
}

export default connect(
  null,
  { p: push }
)(ForgotPasswordPage)
