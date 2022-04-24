import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* saveEvent(action) {
  console.log("ACTION.PAYLOAD =", action.payload);
  try {
    yield axios.post(`/api/profile/save/event`, action.payload);
    yield put({ type: "SET_FETCH_SAVE_EVENT" });
  } catch (error) {
    console.log("FAILED", error);
  }
}
function* postSaveEventSaga() {
  yield takeEvery("ADD_SAVE_EVENT", saveEvent);
}

export default postSaveEventSaga;
