import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'
import ProfilForm from '../forms/ProfilForm'

const ProfilHomePage = () => {
  const submit = data => console.log(data)

  return (
    <Segment>
      <Header textAlign='center'>
        <Icon name='user' />
        <Header.Subheader>Gerez ici votre profil</Header.Subheader>
      </Header>
      <ProfilForm submit={submit} />
    </Segment>
  )
}

export default ProfilHomePage
