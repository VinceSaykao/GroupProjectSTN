import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getProfileSaga() {
  try {
    const profiles = yield axios.get("/api/profile/:id");
    yield put({ type: "SET_PROFILE", payload: profiles.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchProfile() {
  yield takeEvery("SET_PROFILE", getProfileSaga);
}

export default fetchProfile;
