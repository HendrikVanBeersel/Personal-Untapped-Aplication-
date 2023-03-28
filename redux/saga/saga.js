import { put, takeEvery, all } from "redux-saga/effects";
import { LOGGINGIN, LOGGINGOUT } from "./types";

function* loggingInSaga(action) {
  yield put({ payload: action.payload, type: "loginInfo/loggingIn" });
}

function* loggingOutSaga() {
  yield put({ type: "loginInfo/logginOut" });
}

function* watchLoggingIn() {
  yield takeEvery(LOGGINGIN, loggingInSaga);
}

function* watchLoggingOut() {
  yield takeEvery(LOGGINGOUT, loggingOutSaga);
}

export const root = function* rootSaga() {
  yield all([watchLoggingIn(), watchLoggingOut()]);
};
