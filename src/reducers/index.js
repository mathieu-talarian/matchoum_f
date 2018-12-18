import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
// import photos from "./photos";
// import profile from "./profile";
import counter from './counter'
import user from './user'
import count from './count'
import localisation from './localisation'
import profiles from './profiles'

export default history =>
  combineReducers({
    count,
    counter,
    router: connectRouter(history),
    user,
    localisation,
    profiles
    // profile,
    // photos,
  })
