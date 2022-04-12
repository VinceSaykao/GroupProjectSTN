import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchSavedEvents(action) {

    try {
        const savedEvents = yield axios.get(`/api/event/saved/${action.payload}`);  // Fetch ALL approved events (user view)
        yield put ({ type: 'SET_FETCH_SAVED_EVENTS', payload: savedEvents });       // Set Saved Events Reducer

    } catch (error) {
        console.log('fetchSavedEvents Failed:', error);
    }
}

function* fetchSavedEventsSaga() {
    yield takeLatest('FETCH_SAVED_EVENTS', fetchSavedEvents);
}

export default fetchSavedEventsSaga;