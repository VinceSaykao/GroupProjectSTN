import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchSaveEvent() {
  try {
    const selectedEvent = yield axios.get(`/api/profile`);
    yield put({ type: "SET_FETCH_SAVE_EVENT", payload: selectedEvent.data });
  } catch (error) {
    console.log("FAILED", error);
  }
}
function* fetchSaveEventSaga() {
  yield takeEvery("FETCH_SAVE_EVENT", fetchSaveEvent);
}

export default fetchSaveEventSaga;
