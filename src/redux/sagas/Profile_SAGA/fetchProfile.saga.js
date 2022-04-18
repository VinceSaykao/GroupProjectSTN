import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getProfileSaga(action) {
  console.log("id is", action.payload);
  try {
    console.log("BEFORE= ", action.payload);
    // const profiles = yield axios.get(`/api/profile/${action.payload}`);
    const profiles = yield axios.get(`/api/profile`);

    console.log("profiles.data = ", profiles.data);
    yield put({ type: "SET_PROFILE", payload: profiles.data });
  } catch (error) {
    console.log("get all error");
  }
}

function* fetchProfile() {
  yield takeEvery("SET_PROFILE_SAGA", getProfileSaga);
}

export default fetchProfile;
