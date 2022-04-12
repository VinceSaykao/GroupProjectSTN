import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchOrgEvents(action) {

    try {
        const orgEvents = yield axios.get(`/api/event/organization/${action.payload}`);  // Gets Event by Org ID
        yield put({ type: 'SET_FETCH_ORG_EVENTS', payload: orgEvents });                 // Sets Org Events Reducer

    } catch (error) {
        console.log('fetchEventOrganization Failed:', error);
    }
}

function* fetchEventIdSaga() {
    yield takeLatest('FETCH_EVENT_ORGANIZATION', fetchOrgEvents);
}

export default fetchEventIdSaga;