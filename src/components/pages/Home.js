import React from 'react'
import { connect } from 'react-redux'
import { Grid, Container } from 'semantic-ui-react'

import SearchSettingsPage from './SearchSettingsPage'
import SearchResults from './SearchResults'
const Home = () => (
  <Container>
    <Grid celled columns={2}>
      <Grid.Row>
        <Grid.Column stretched width={4}>
          <SearchSettingsPage />
        </Grid.Column>
        <Grid.Column stretched width={12}>
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
