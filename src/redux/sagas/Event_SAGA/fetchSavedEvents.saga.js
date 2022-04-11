import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchSavedEvents() {

    try {
        axios.get(`/api/event/saved`);  // Fetch ALL approved events (user view)

    } catch (error) {
        console.log('fetchSavedEvents Failed:', error);
    }
}

function* fetchSavedEventsSaga() {
    yield takeLatest('FETCH_EVENT', fetchSavedEvents);
}

export default fetchSavedEventsSaga;