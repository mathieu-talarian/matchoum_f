import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import Api from "../api";

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

function* anotherSaga() {
  yield all([]);
}

// changed type of `saga` from `SagaIterator` to `() => SagaIterator`
// function* someSaga(saga: () => SagaIterator) {
//   yield call(saga);
// }

// function* thirdSaga(saga: () => SagaIterator) {
//   yield call(saga);
// }

export default function* rootSaga() {
  yield all([]);
}
