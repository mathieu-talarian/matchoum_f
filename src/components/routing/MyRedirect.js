import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

export default connect(
  null,
  { push }
)(props => <div>{props.push('/')}</div>)
