import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateEvent(action) {
    try {

        axios.put(`/api/event/${action.payload.id}`, action.payload);   // Updates Specified Event
        yield put({ type: 'FETCH_EVENT' });                             // Re-Fetch ALL Events

    } catch (error) {
        console.log('updateEvent Failed:', error);
    }
}

function* fetchSavedEventsSaga() {
    yield takeEvery('UPDATE_EVENT', updateEvent);
}

export default fetchSavedEventsSaga;