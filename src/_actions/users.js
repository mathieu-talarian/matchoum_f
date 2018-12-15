import api from '../api'
import { userLoggedIn } from './auth'
import { MAIL_UPDATED, PASSWORD_UPDATED } from '../types'
import setAuthorizationHeader from '../utils/setAuthorizationHeader'
import localStorage from '../utils/storage'

export const mailUpdated = user => ({
  type: MAIL_UPDATED,
  user
})

export const passwordUpdated = () => ({
  type: PASSWORD_UPDATED
})

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.JWT = user.token
    dispatch(userLoggedIn(user))
  })

export const updateMail = data => dispatch =>
  api.account.updateEmail(data).then(user => {
    localStorage.JWT = user.token
    setAuthorizationHeader(user.token)
    dispatch(mailUpdated(user))
  })

export const updatePassword = data => dispatch => {
  return api.account.updatePassword(data).then(() => {
    dispatch(passwordUpdated())
  })
}

export const signin = {}
