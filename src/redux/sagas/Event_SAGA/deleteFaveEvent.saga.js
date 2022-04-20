import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* deleteFaveEvent(action) {
  console.log("action.payload =", action.payload);
  try {
    axios.delete(`/api/event/delete/fave`, action.payload);
    // yield put({ type: "FETCH_SAVED_EVENTS" });
  } catch (error) {
    console.log("deleteEvent Failed", error);
  }
}
function* deleteFaveEventSaga() {
  yield takeEvery("DELETE_FAVE_EVENT", deleteFaveEvent);
}

export default deleteFaveEventSaga;
