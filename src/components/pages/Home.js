import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Grid,
  Container,
  Form,
  Button,
  GridColumn,
  Segment,
  FormField
} from 'semantic-ui-react'

import SearchForm from '../forms/SearchForm'
import TopNavigation from '../navigation/TopNavigation'

class Home extends React.Component {
  render = () => (
    <Container>
      <Grid celled columns={2}>
        <Grid.Row>
          <Grid.Column width={2}>
            <SearchForm />
          </Grid.Column>
          <Grid.Column width={8}>SearchResults</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default connect(
  null,
  null
)(Home)
