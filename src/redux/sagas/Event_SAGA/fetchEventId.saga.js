import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchEventId(action) {

    try {
        axios.get(`/api/event/${action.payload}`);  // Gets Event by ID

    } catch (error) {
        console.log('fetchEventOrganization Failed:', error);
    }
}

function* fetchEventIdSaga() {
    yield takeLatest('FETCH_EVENT_ORGANIZATION', fetchEventId);
}

export default fetchEventIdSaga;