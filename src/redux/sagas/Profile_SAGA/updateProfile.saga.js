import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* editProfileSaga(action) {
  try {
    console.log("BEFORE editProfileSaga PUT", action);
    const profileUpdate = yield axios.put(`/api/profile/${action.payload.id}`);
    // yield put({ type: "SET_PROFILE_SAGA", payload: profileUpdate.data });
    console.log("AFTER editProfileSaga PUT", action);
  } catch (error) {
    console.log("get all error", error);
  }
}

function* updateProfile() {
  yield takeEvery("SET_UPDATE_PROFILE_SAGA", editProfileSaga);
}

export default updateProfile;
