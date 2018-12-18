const initialCountState = 0

export default (state = initialCountState, action = {}) => {
  console.log(action.count)
  switch (action.type) {
    case 'COUNT_UP':
      return state + 1
  }
  return state
}
