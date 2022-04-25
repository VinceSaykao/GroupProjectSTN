import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateEventStatusDeny(action) {


    console.log('In updateEventStatusDeny, id of event: ', action.payload);

    try {
        yield axios.put(`/api/event/deny/${action.payload.id}`, action.payload);   // Updates Specified Event
        yield put({ type: 'FETCH_EVENT' });                                        // Re-Fetch ALL Events

    } catch (error) {
        console.log('updateEventStatusDeny Failed:', error);
    }
}


function* updateEventStatusDenySaga() {
    yield takeEvery('UPDATE_EVENT_STATUS_DENY', updateEventStatusDeny);
}

export default updateEventStatusDenySaga;