import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";


function* editProfileSaga(action) {
  const headers = {
    'content-type': 'mulitpart/form-data'
  }
  const imageForm = new FormData();

  imageForm.append('image', action.payload.image);
  imageForm.append('first_name', action.payload.first_name);
  imageForm.append('last_name', action.payload.last_name);
  imageForm.append('bio', action.payload.bio);
  imageForm.append('email', action.payload.email);
  console.warn('imageFrom:', imageForm)
  console.log('action payload image is', action.payload.image)
  try {
    console.log('headers is', headers);
    console.log('image form is', imageForm);
    const response = yield axios({
      method: 'PUT',
      url: `/api/profile/${action.payload.id}`,

      headers: headers,
      data: imageForm,


    })
    yield put({ type: "SET_PROFILE", payload: action.payload.id });
    console.log("AFTER editProfileSaga PUT", action);
  } catch (error) {
    console.log("get all error", error);
  }
}
// try {
//   console.log("BEFORE editProfileSaga PUT", action);




//     yield axios.put(`/api/profile/${action.payload.id}`, action.payload);
//     // yield put({ type: "SET_PROFILE" });
//     yield put({ type: "SET_PROFILE", payload: action.payload.id });
//     console.log("AFTER editProfileSaga PUT", action);
//   } catch (error) {
//     console.log("get all error", error);
//   }
// }

function* updateProfile() {
  yield takeEvery("SET_UPDATE_PROFILE_SAGA", editProfileSaga);
}

export default updateProfile;