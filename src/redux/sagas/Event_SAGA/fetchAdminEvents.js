import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchAdminEvents() {

    try {
        axios.get(`/api/event/admin`);  // Gets All Events for Admin user (All Statuses)

    } catch (error) {
        console.log('fetchEventAdmin Failed:', error);
    }
}

function* fetchAdminEventsSaga() {
    yield takeLatest('FETCH_EVENT_ADMIN', fetchAdminEvents);
}

export default fetchAdminEventsSaga;