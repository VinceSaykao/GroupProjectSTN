import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* updateOrg(action) {
  try {
      yield axios.put(`/api/organization/${action.payload.id}`, action.payload.update)
      yield put({type: 'SET_FETCH_ORGANIZATIONS'})
      yield put({type: 'SET_ORG_PROFILE', payload: action.payload.id})
  } catch(error) {
      console.log('Error updating the organization', error);
  }
}

function* updateOrganization() {
  yield takeEvery('UPDATE_ORGANIZATION', updateOrg);
}

export default updateOrganization;
