import * as faker from 'faker/locale/fr'
import { normalize, schema } from 'normalizr'

const createFalseProfiles = () => {
  const orientation = num => {
    switch (num) {
      case 0:
        return 'heterosexuel'
      case 1:
        return 'bisexuel'
      case 2:
        return 'homosexuel'
    }
  }
  let tab = []
  for (let i = 0; i < 10; i++) {
    tab.push({
      id: faker.random.uuid(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      pseudo: faker.random.word(),
      photo: faker.image.avatar(),
      gender: faker.random.boolean(),
      orientation: orientation(faker.random.number() % 3),
      bio: faker.lorem.paragraph()
    })
  }
  return tab
}

const initialState = createFalseProfiles()

const prof = new schema.Entity('profile')
const profile = normalize(initialState, prof)
console.log(profile)

export default (state = initialState, action = {}) => {
  return state
}
