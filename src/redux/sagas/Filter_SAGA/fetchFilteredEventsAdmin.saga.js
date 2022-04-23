import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { useSelector } from 'react-redux';

function* fetchFilteredEventsAdmin(action) {

    console.log('action.payload:', action.payload);
    
    const filteredResults = yield axios.post(`/api/filter/category`, action.payload)

    // if (!filters.selected_category_1) {
    //     filteredArray = filteredArray.filter(event => event.category_id != 1); // 1 = id for Community Council Meetings
    // }
    
    yield put({ type: 'SET_FETCH_APPROVED_EVENT', payload: filteredResults })
}


function* fetchFilteredEventsAdminSaga() {
    yield takeEvery('FETCH_FILTERED_EVENTS', fetchFilteredEventsAdmin);
}

export default fetchFilteredEventsAdminSaga;