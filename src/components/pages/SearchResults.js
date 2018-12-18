import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon, Divider, Container } from 'semantic-ui-react'

const SearchResults = ({ profiles }) => (
  <>
    {profiles ? (
      <Card.Group itemsPerRow={2}>
        {profiles.map((value, index) => (
          <Card
            raised
            color={value.gender ? 'blue' : 'pink'}
            image={value.photo}
            header={value.pseudo}
            meta={value.lasname}
            description={value.bio}
            extra={() => (
              <>
                <Card.Content extra>
                  <Icon name='gender' />
                  {value.gender ? 'Homme' : 'Femme'}
                </Card.Content>

                <Card.Content extra>
                  <Icon name='search' />
                  {value.orientation.charAt(0).toUpperCase() +
                    value.orientation.slice(1)}
                </Card.Content>
              </>
            )}
          />
        ))}
      </Card.Group>
    ) : (
      <>without profiles</>
    )}
  </>
)

const mapStateToProps = ({ profiles }) => ({
  profiles
})

export default connect(mapStateToProps)(SearchResults)
