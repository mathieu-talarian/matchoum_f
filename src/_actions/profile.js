import api from '../api'
import { PROFILE_GET, PROFILE_UPDATED, PROFILE_ADDED } from '../types'
import localStorage from '../utils/storage'

export const profileAdded = profile => ({
  type: PROFILE_ADDED,
  profile
})

export const profileGet = profile => ({
  type: PROFILE_GET,
  profile
})

export const profileUpdated = profile => ({
  type: PROFILE_UPDATED,
  profile
})

export const add = datas => dispatch =>
  api.profile.add(datas).then(profile => {
    if (profile) {
      localStorage.profile = JSON.stringify(profile)
      dispatch(profileAdded(profile))
    }
  })

export const get = () => dispatch =>
  api.profile.get().then(profile => {
    localStorage.profile = JSON.stringify(profile)
    dispatch(profileGet(profile))
  })

export const update = datas => dispatch =>
  api.profile.update(datas).then(profile => {
    if (profile) {
      localStorage.profile = JSON.stringify(profile)
      dispatch(profileUpdated(profile))
    }
  })
