import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getProfileSaga(action) {

  console.log("id is", action.payload);
  try {
    const profiles = yield axios.get(`/api/profile`);
    
    yield put({ type: "SET_PROFILE", payload: profiles.data });
  } catch (error) {
    console.log("get all error");
  }
}

function* fetchProfile() {
  yield takeEvery("SET_PROFILE_SAGA", getProfileSaga);
}

export default fetchProfile;
