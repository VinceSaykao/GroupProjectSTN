import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteEvent(action) {

    try {
        axios.delete(`/api/event/${action.payload}`);  // Deletes Specified Listing
        yield put({ type: 'FETCH_EVENT' });                    // Re-Fetch ALL Listings

    } catch (error) {
        console.log('deleteEvent Failed', error);
    }
}

function* deleteEventSaga() {
    yield takeLatest('DELETE_EVENT', deleteEvent);
}

export default deleteEventSaga;