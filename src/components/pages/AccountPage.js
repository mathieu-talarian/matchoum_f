import React from 'react'
import { Header, Icon, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { updatePassword, updateMail } from '../../actions/users'
import PropTypes from 'prop-types'

const AccountPage = props => (
  <Container>
    <Container textAlign='center'>
      <Header as='h2' icon>
        <Icon name='key' />
        Parametres de votre compte
        <Header.Subheader>Gerez votre compte</Header.Subheader>
      </Header>
    </Container>
    {/* <MailForm submit={props.updateMail} /> */}
    {/* <PasswordForm submit={props.updatePassword} /> */}
  </Container>
)

AccountPage.propTypes = {
  // updateMail: PropTypes.func.isRequired,
  // updatePassword: PropTypes.func.isRequired
}

export default connect(
  null,
  {} // { updateMail, updatePassword }
)(AccountPage)
