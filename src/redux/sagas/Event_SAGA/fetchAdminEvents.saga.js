import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchAdminEvents() {

    try {
        const AdminEvents = yield axios.get(`/api/event`); // Gets All Approved Events for Admin user 
        yield put({ type: 'SET_FETCH_EVENT_ADMIN', payload: AdminEvents.data }); // Sets Admin Event Reducer

    } catch (error) {
        console.log('fetchEventAdmin Failed:', error);
    }
}

function* fetchAdminEventsSaga() {
    yield takeEvery('FETCH_EVENT_ADMIN', fetchAdminEvents);
}

export default fetchAdminEventsSaga;