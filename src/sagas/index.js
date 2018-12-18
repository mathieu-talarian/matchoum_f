import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
  take
} from 'redux-saga/effects'
import Api from '../api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action: any) {
//   try {
//     const user = yield call(Api.fetchUser, action.payload.userId);
//     yield put({ type: "USER_FETCH_SUCCEEDED", user });
//   } catch (e) {
//     yield put({ type: "USER_FETCH_FAILED", message: e.message });
//   }
// }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga(): SagaIterator {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

// /*
//   Alternatively you may use takeLatest.

//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

function * apiCall () {
  try {
    yield put({ type: 'API_CALLED', user: 'moi' })
  } catch (e) {
    console.log(e.message)
    yield put({ type: 'API_FETCH_FAILED', message: e.message })
  }
}

function * mySaga () {
  yield takeEvery('COUNT_UP', apiCall)
  yield takeEvery('POSITION_REQUIRED', getUserLocation)
}

function userPositionPromised () {
  const position = {}
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      location => position.on({ location }),
      error => position.on({ error }),
      { enableHighAccuracy: true }
    )
  }
  return {
    getLocation: () => new Promise(location => (position.on = location))
  }
}

function * getUserLocation () {
  yield put({ type: 'GET_LOCATION_REQUESTED' })
  const { getLocation } = yield call(userPositionPromised)
  const { error, location } = yield call(getLocation)
  if (error) {
    console.log('Failed to get user position!', error)
    const { message, code } = error
    yield put({ type: 'GET_LOCATION_FAILED', payload: { code, message } })
  } else {
    console.log('Received User Location', location)
    const { latitude: lat, longitude: lng } = location.coords
    yield put({ type: 'GET_LOCATION_SUCCESS', payload: { lat, lng } })
  }
}

export default mySaga
