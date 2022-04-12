import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addEvent() {

    try {
        axios.post('/api/event', action.payload);   // Posts Event to DB
        yield put({ type: 'FETCH_APPROVED_EVENTS' });         // Re-Fetch ALL events


    } catch (error) {
        console.log('addEvent Failed:', error);
    }
}

function* addEventSaga() {
    yield takeEvery('ADD_EVENT', addEvent);
}

export default addEventSaga;