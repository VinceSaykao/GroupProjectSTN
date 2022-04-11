import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchEventOrganization() {

    // ! NO ADMIN FETCH EXISTS ON BACKEND ! //

    // try {
    //     axios.get(`/api/event/admin`);  // Gets All Events Admin

    // } catch (error) {
    //     console.log('fetchEventOrganization Failed:', error);
    // }
}

function* fetchEventAdminSaga() {
    yield takeLatest('FETCH_EVENT_ORGANIZATION', fetchEventOrganization);
}

export default fetchEventAdminSaga;