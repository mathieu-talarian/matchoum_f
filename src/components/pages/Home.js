import React from 'react'
import { connect } from 'react-redux'
import { Grid, Container } from 'semantic-ui-react'

import SearchSettingsPage from './SearchSettingsPage'
import SearchResults from './SearchResults'
const Home = () => (
  <Container>
    <Grid celled columns={2}>
      <Grid.Row>
        <Grid.Column width={4}>
          <SearchSettingsPage />
        </Grid.Column>
        <Grid.Column width={8}>
          <SearchResults />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default connect(
  null,
  null
)(Home)
