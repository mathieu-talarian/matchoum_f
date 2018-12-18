import {
  MAIL_UPDATED,
  PASSWORD_UPDATED,
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from '../types'

export default function user (state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user
    case USER_LOGGED_OUT:
      return {}
    case MAIL_UPDATED:
      return action.user
    case PASSWORD_UPDATED:
      return state
    default:
      return state
  }
}
