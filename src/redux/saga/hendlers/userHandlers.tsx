import { put, call } from "redux-saga/effects";
import { userRequests } from "../requests/userRequests";
import { getUserError, getUserSuccess } from "../../reduser/user/userReduser";
//type getUserHandler = {};

export function* getUserHandler(): any {
  try {
    const res = yield call(userRequests);
    const { data } = res;
    yield put(getUserSuccess(data));
  } catch (error) {
    yield put(getUserError(error));
  }
}
