import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchPendingSearch(action) {
        
    try {
        console.log('action.payload', action.payload);
        
        const pendingEvents = yield axios.get(`/api/filter/pending/${action.payload.search}`);  // Gets All Pending Events
        console.log('Pending Events:', pendingEvents);
        yield put ({ type: 'SET_FETCH_PENDING_EVENT_ADMIN', payload: pendingEvents.data });     // Pending Events Reducer
        
    } catch (error) {
        console.log('Fetch Pending Failed:', error);
    }
}

function* fetchPendingSearchSaga() {
    yield takeEvery('FETCH_PENDING_SEARCH', fetchPendingSearch);
}

export default fetchPendingSearchSaga;