import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* postEvent(action) {

    try {
        console.log('action.payload', action.payload);
        
        axios.post('/api/event', action.payload);       // Posts Event to DB
        yield put({ type: 'FETCH_APPROVED_EVENTS' });   // Re-Fetch ALL events


    } catch (error) {
        console.log('addEvent Failed:', error);
    }
}

function* addEventSaga() {
    yield takeLatest('POST_EVENT', postEvent);
}

export default addEventSaga;