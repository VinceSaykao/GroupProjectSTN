import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* deleteEvent(action) {

    try {
        axios.delete(`/api/event/${action.payload}`);  // Deletes Specified Listing
        yield put({ type: 'FETCH_APPROVED_EVENTS' });            // Re-Fetch ALL Listings

    } catch (error) {
        console.log('deleteEvent Failed', error);
    }
}

function* deleteEventSaga() {
    yield takeEvery('DELETE_EVENT', deleteEvent);
}

export default deleteEventSaga;