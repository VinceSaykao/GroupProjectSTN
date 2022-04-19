import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addOrg(action) {
  try {
    console.log(action.payload.newOrg);
    let response = yield axios.post('/api/organization/', action.payload.newOrg);
    console.log(response);
    yield action.payload.history.push(`/organization-view/${response.data.createdOrgID}`);
    // yield put({ type: 'SET_USER_ORG_ID', payload: response.data.id });
  } catch (error) {
    console.log('Error posting the new organization', error);
  }
}

function* addOrganizationsSaga() {
  yield takeLatest('ADD_ORGANIZATION', addOrg);
}

export default addOrganizationsSaga;
