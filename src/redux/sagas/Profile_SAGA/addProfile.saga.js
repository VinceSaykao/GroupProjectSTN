import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* postProfile() {
  try {
    const createProfile = yield axios.get("/api/event/:id");
    yield put({ type: "SET_PROFILE_SAGA", payload: createProfile.data });
  } catch {
    console.log("get all error");
  }
}

function* addProfile() {
  yield takeEvery("SET_ADD_PROFILE_SAGA", postProfile);
}

export default addProfile;
