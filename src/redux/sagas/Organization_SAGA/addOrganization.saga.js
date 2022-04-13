import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addOrg(action) {
  try {
    console.log(action.payload);
    yield axios.post('/api/organization/', action.payload);
  } catch (error) {
    console.log('Error posting the new organization', error);
  }
}

function* addOrganizationsSaga() {
  yield takeLatest('ADD_ORGANIZATION', addOrg);
}

export default addOrganizationsSaga;
