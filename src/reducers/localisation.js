export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'GET_LOCATION_SUCCESS':
      return { ...state, success: action.payload }
    case 'GET_LOCATION_FAILED':
      return { ...state, error: action.payload }
    default:
      return state
  }
}
