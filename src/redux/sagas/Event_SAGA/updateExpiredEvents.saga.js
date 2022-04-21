import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateExpiredEvents (action) {
    const exp = action.payload
    console.log('Saga EXPIRED: ', action.payload);
    for (let i=0; i < exp.length; i++) {

        try {
            axios.put(`/api/event/expired/${action.payload}`);   // Updates Events to Expired Status
            // yield put({ type: 'FETCH_EVENT' });             // Re-Fetch Expired Events
    
        } catch (error) {
            console.log('update Expired Event Failed:', error);
        }



    }

}

function* fetchSavedEventsSaga() {
    yield takeEvery('UPDATE_EXPIRED_EVENTS', updateExpiredEvents);
}

export default fetchSavedEventsSaga;