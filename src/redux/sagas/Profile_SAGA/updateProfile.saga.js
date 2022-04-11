import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* editProfileSaga() {
  try {
    const profileUpdate = yield axios.put("/api/profile/:id");
    yield put({ type: "SET_PROFILE_SAGA", payload: profileUpdate.data });
  } catch {
    console.log("get all error");
  }
}

function* updateProfile() {
  yield takeEvery("SET_UPDATE_PROFILE_SAGA", editProfileSaga);
}

export default updateProfile;