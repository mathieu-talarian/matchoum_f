import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'
import createRootReducer from './reducers'
import mySaga from './sagas'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []
const middleware = [/* thunk, */ routerMiddleware(history), sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
)

sagaMiddleware.run(mySaga)
