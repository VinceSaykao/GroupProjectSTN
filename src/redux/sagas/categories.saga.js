import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchCategories() {
  
  try {
      const categories = yield axios.get('/api/category');            // get all categories from the DB
      yield put({ type: 'SET_CATEGORIES', payload: categories.data });  // set all categories in the Reducer

  } catch {
      console.log('Error getting all the organizations', error);
  }
}

function* fetchCategoriesSaga() {
  yield takeEvery('FETCH_CATEGORIES', fetchCategories);
}

export default fetchCategoriesSaga;