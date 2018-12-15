export default () => {
  if (!typeof window.localStorage === 'undefined') return window.localStorage
  else if (!typeof localStorage === 'undefined') return localStorage
  else return false
}
