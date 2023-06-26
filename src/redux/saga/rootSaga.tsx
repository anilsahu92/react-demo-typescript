import { takeLatest, all } from "redux-saga/effects";
import { getUserHandler } from "./hendlers/userHandlers";
import { getUserRequest } from "../reduser/user/userReduser";

export function* userWatcherSaga() {
  yield takeLatest(getUserRequest.type, getUserHandler);
}

export default function* rootSaga() {
  yield all([userWatcherSaga()]);
}
