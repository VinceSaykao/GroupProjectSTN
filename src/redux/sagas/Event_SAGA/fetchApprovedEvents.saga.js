import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchApprovedEvents() {

    try {
        const ApprovedEvents = yield axios.get(`/api/event`);                       // Gets All Approved Events
        yield put ({ type: 'SET_FETCH_APPROVED_EVENTS', payload: ApprovedEvents }); // Approved Events Reducer

    } catch (error) {
        console.log('fetchEvent Failed:', error);
    }
}

function* fetchApprovedEventsSaga() {
    yield takeLatest('FETCH_APPROVED_EVENTS', fetchApprovedEvents);
}

export default fetchApprovedEventsSaga;