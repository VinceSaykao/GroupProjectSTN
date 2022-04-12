import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchApprovedEvents() {

    try {
        axios.get(`/api/event`);  // Gets All Approved Events

    } catch (error) {
        console.log('fetchEvent Failed:', error);
    }
}

function* fetchApprovedEventsSaga() {
    yield takeLatest('FETCH_EVENT', fetchApprovedEvents);
}

export default fetchApprovedEvents;