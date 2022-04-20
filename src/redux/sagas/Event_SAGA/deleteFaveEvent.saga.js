import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* deleteFaveEvent() {
  try {
    axios.delete(`/api/event/fave/${action.payload}`);
    yield put({ type: "FETCH_SAVED_EVENTS" });
  } catch (error) {
    console.log("deleteEvent Failed", error);
  }
}
function* deleteFaveEventSaga() {
  yield takeEvery("DELETE_FAVE_EVENT", deleteFaveEvent);
}

export default deleteFaveEventSaga;
