import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateEvent(action) {
    try {

        axios.put(`/api/event/${action.payload.id}`, action.payload);   // Updates Specified Event
        yield put({ type: 'FETCH_EVENT' });                             // Re-Fetch ALL Events

    } catch (error) {
        console.log('updateEvent Failed:', error);
    }
}

function* fetchSavedEventsSaga() {
    yield takeLatest('UPDATE_EVENT', updateEvent);
}

export default fetchSavedEventsSaga;