import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchOrganizations() {
  // get all organizations from the DB
  try {
      const response = yield axios.get('/api/organization');
      console.log(response.data);
      yield put({ type: 'SET_FETCH_ORGANIZATIONS', payload: response.data });
      
  } catch {
      console.log('Error getting all the organizations', error);
  }
}

function* fetchAllOrganizations() {
  yield takeEvery('FETCH_ORGANIZATIONS', fetchOrganizations);
}

export default fetchAllOrganizations;