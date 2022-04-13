import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchPendingAdminEvents() {

    try {
        const  AdminEvents = yield axios.get(`/api/event/admin/pending`);  // Gets All Pending Events for Admin user 
        yield put({ type: 'SET_FETCH_PENDING_EVENT_ADMIN', payload: AdminEvents.data }); // Sets Admin Event Reducer

    } catch (error) {
        console.log('fetchEventAdmin Failed:', error);
    }
}

function* fetchAdminEventsSaga() {
    yield takeEvery('FETCH_PENDING_EVENT_ADMIN', fetchPendingAdminEvents);
}

export default fetchAdminEventsSaga;