import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchApprovedEvents() {
        
    try {
        const ApprovedEvents = yield axios.get(`/api/event`);                       // Gets All Approved Events
        yield put ({ type: 'SET_FETCH_APPROVED_EVENTS', payload: ApprovedEvents }); // Approved Events Reducer
        
    } catch (error) {
        console.log('fetchEvent Failed:', error);
    }
}

function* fetchApprovedEventsSaga() {
    yield takeEvery('FETCH_APPROVED_EVENTS', fetchApprovedEvents);
}

export default fetchApprovedEventsSaga;