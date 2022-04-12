import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getProfileEventSaga(action) {
  try {
    const eventProfile = yield axios.get(`/api/event/${action.payload}`);
    yield put({ type: "SET_PROFILE_EVENT", payload: eventProfile.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchProfileEvent() {
  yield takeEvery("SET_PROFILE_EVENT_SAGA", getProfileEventSaga);
}

export default fetchProfileEvent;
