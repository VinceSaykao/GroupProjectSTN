import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";
// Profile
import fetchProfile from "./Profile_SAGA/fetchProfile.saga";
import fetchProfileEvent from "./Profile_SAGA/fetchProfileEvent.saga";
import addProfile from "./Profile_SAGA/addProfile.saga";
import updateProfile from "./Profile_SAGA/updateProfile.saga";
// Organizations
import fetchAllOrganizations from './Organization_SAGA/fetchAllOrganizations.saga';
// Events
import addEventSaga from './Event_SAGA/addEvent.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchAllOrganizations(),
    fetchProfile(),
    fetchProfileEvent(),
    addProfile(),
    updateProfile(),
  ]);
}
