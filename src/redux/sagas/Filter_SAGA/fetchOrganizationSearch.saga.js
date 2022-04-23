import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchOrganizationSearch(action) {
        
    try {
        console.log('action.payload', action.payload);
        
        const searchResults = yield axios.get(`/api/filter/org/${action.payload.search}`);  // Searches Organization DB for matching results
        yield put ({ type: 'SET_FETCH_ORGANIZATIONS', payload: searchResults.data });       // Sets Organization Reducer
        
    } catch (error) {
        console.log('fetch Approved Failed:', error);
    }
}

function* fetchOrganizationSearchSaga() {
    yield takeEvery('FETCH_ORGANIZATION_SEARCH', fetchOrganizationSearch);
}

export default fetchOrganizationSearchSaga;