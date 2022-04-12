import axios from 'axios';
import { takeEvery , put } from 'redux-saga/effects';

function* fetchAdminEvents() {

    try {
        yield axios.get(`/api/event`);            // Gets All Events for Admin user (All Statuses)
        yield put({ type: 'SET_FETCH_EVENT_ADMIN'}); // Sets Admin Event Reducer

    } catch (error) {
        console.log('fetchEventAdmin Failed:', error);
    }
}

function* fetchAdminEventsSaga() {
    yield takeEvery('FETCH_EVENT_ADMIN', fetchAdminEvents);
}

export default fetchAdminEventsSaga;