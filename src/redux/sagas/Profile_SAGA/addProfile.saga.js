import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* postProfile() {
  const headers = {
    'content-type': 'mulitpart/form-data'
  }
  const imageForm = new FormData();
  try {
    const createProfile = yield axios.post("/api/profile");
    yield put({ type: "SET_PROFILE", payload: createProfile.data });
  } catch {
    console.log("get all error");
  }
}

function* addProfile() {
  yield takeEvery("SET_ADD_PROFILE_SAGA", postProfile);
}

export default addProfile;
