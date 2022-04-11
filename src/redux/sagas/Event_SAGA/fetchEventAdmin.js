import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchEventAdmin() {

    try {
        axios.get(`/api/event/admin`);  // Gets All Events Admin

    } catch (error) {
        console.log('fetchEventAdmin Failed:', error);
    }
}

function* fetchEventAdminSaga() {
    yield takeLatest('FETCH_EVENT_ADMIN', fetchEventAdmin);
}

export default fetchEventAdminSaga;