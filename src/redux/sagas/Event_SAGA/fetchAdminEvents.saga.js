import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchAdminEvents() {

    try {
        const AdminEvents = yield axios.get(`/api/event/admin`);            // Gets All Events for Admin user (All Statuses)
        yield put({ type: 'SET_FETCH_EVENT_ADMIN', payload: AdminEvents }); // Sets Admin Event Reducer

    } catch (error) {
        console.log('fetchEventAdmin Failed:', error);
    }
}

function* fetchAdminEventsSaga() {
    yield takeLatest('FETCH_EVENT_ADMIN', fetchAdminEvents);
}

export default fetchAdminEventsSaga;