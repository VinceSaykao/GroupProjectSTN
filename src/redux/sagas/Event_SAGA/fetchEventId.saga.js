import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchEventId(action) {

    try {
        const selectedEvent = yield axios.get(`/api/event/${action.payload}`);  // Gets Event by ID
        yield put ({ type: 'SET_FETCH_EVENT_ID', payload: selectedEvent })      // Set Selected Event Reducer
        
    } catch (error) {
        console.log('fetchEventOrganization Failed:', error);
    }
}

function* fetchEventIdSaga() {
    yield takeLatest('FETCH_EVENT_ORGANIZATION', fetchEventId);
}

export default fetchEventIdSaga;