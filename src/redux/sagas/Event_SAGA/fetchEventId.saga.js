import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchEventId(action) {

    try {
        const selectedEvent = yield axios.get(`/api/event/${action.payload}`);  // Gets Event by ID
        
        yield put ({ type: 'SET_FETCH_EVENT_ID', payload: selectedEvent.data })      // Set Selected Event Reducer
        yield put ({ type: 'SET_UPDATE_EVENT', payload: selectedEvent.data })      // Set Selected Event Reducer
        
    } catch (error) {
        console.log('fetchEventOrganization Failed:', error);
    }
}

function* fetchEventIdSaga() {
    yield takeEvery('FETCH_EVENT_DETAILS', fetchEventId);
}

export default fetchEventIdSaga;