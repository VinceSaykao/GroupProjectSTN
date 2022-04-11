import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchEvent() {

    try {
        axios.get(`/api/event`);  // Gets All Events

    } catch (error) {
        console.log('fetchEvent Failed:', error);
    }
}

function* fetchEventSaga() {
    yield takeLatest('FETCH_EVENT', fetchEvent);
}

export default fetchEventSaga;