import { Alert } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ResetPasswordForm from '../forms/ResetPasswordForm'

class ResetPasswordPage extends Component {
  state = {
    loading: true,
    success: false
  }

  componentDidMount() {
    // validate token;
  }

  submit(data) {
    console.log('====================================')
    console.log(data)
    console.log('====================================')
  }

  render() {
    const { loading, success } = this.state
    const { token } = this.props.match.params
    return (
      <div>
        {loading && <Alert message="chargement">Chargement</Alert>}
        {!loading && success && (
          <ResetPasswordForm submit={this.submit} token={token} />
        )}
        {!loading && !success && (
          <Alert message="chargement">Invalid token</Alert>
        )}
      </div>
    )
  }
}

ResetPasswordPage.propTypes = {
  // validateToken: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  // resetPassword: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(
  null,
  {} //{ validateToken, resetPassword }
)(ResetPasswordPage)
