import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container } from 'semantic-ui-react'
import TopNavigation from '../navigation/TopNavigation'

const Home = props => {
  return <Container />
}

export default connect(
  null,
  null
)(Home)
