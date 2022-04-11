function* fetchOrganizations() {
  // get all organizations from the DB
  try {
      const response = yield axios.get('/api/organizations');
      yield put({ type: 'SET_FETCH_ORGANIZATIONS', payload: response.data });

  } catch {
      console.log('Error getting all the organizations', error);
  }
}

function* fetchOrganizationsSaga() {
  yield takeLatest('FETCH_ORGANIZATIONS', fetchOrganizations);
}

export default fetchOrganizationsSaga;