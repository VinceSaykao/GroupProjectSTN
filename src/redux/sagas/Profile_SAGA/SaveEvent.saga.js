import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* saveEvent() {
  try {
    const selectedEvent = yield axios.post(`/api/profile`);
    yield put({ type: "SET_SAVE_EVENT", payload: selectedEvent.data });
  } catch (error) {
    console.log("FAILED", error);
  }
}
function* postSaveEventSaga() {
  yield takeEvery("SET_SAVE_EVENT", saveEvent);
}

export default postSaveEventSaga;
