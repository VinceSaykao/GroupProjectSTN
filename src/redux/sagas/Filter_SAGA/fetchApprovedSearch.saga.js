import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchApprovedSearch(action) {
        
    try {
        console.log('action.payload', action.payload);
        
        const ApprovedEvents = yield axios.get(`/api/filter/approved/${action.payload.search}`);  // Gets All Approved Events
        yield put ({ type: 'SET_FETCH_APPROVED_EVENTS', payload: ApprovedEvents.data });          // Approved Events Reducer
        
    } catch (error) {
        console.log('fetch Approved Failed:', error);
    }
}

function* fetchApprovedSearchSaga() {
    yield takeEvery('FETCH_APPROVED_SEARCH', fetchApprovedSearch);
}

export default fetchApprovedSearchSaga;