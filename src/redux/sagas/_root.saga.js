// login / registration
import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";

// Profiles
import fetchProfile from "./Profile_SAGA/fetchProfile.saga";
import fetchProfileEvent from "./Profile_SAGA/fetchProfileEvent.saga";
import addProfile from "./Profile_SAGA/addProfile.saga";
import updateProfile from "./Profile_SAGA/updateProfile.saga";
import fetchSaveEventSaga from "./Profile_SAGA/fetchProfileSaveEvent.saga";
import postSaveEventSaga from "./Profile_SAGA/SaveEvent.saga";

// Organizations
import addOrganizationsSaga from "./Organization_SAGA/addOrganization.saga";
import fetchAllOrganizationsSaga from "./Organization_SAGA/fetchAllOrganizations.saga";
import fetchOrganization from "./Organization_SAGA/fetchOrganization.saga";
import updateOrganization from "./Organization_SAGA/updateOrganization.saga";

// Events
import addEvent from "./Event_SAGA/addEvent.saga";
import deleteEvent from "./Event_SAGA/deleteEvent.saga";
import fetchAdminEvents from "./Event_SAGA/fetchAdminEvents.saga";
import fetchApprovedEvents from "./Event_SAGA/fetchApprovedEvents.saga";
import fetchEventId from "./Event_SAGA/fetchEventId.saga";
import fetchOrgEvents from "./Event_SAGA/fetchOrgEvents.saga";
import fetchSavedEvents from "./Event_SAGA/fetchSavedEvents.saga";
import updateEvent from "./Event_SAGA/updateEvent.saga";
import fetchAdminPendingEvents from "./Event_SAGA/fetchAdminPendingEvents.saga";
import deleteFaveEventSaga from "./Event_SAGA/deleteFaveEvent.saga";

// Categories
import categories from "./categories.saga";

// Filters
import fetchApprovedSearch from './Filter_SAGA/fetchApprovedSearch.saga'
import fetchPendingSearch from './Filter_SAGA/fetchPendingSearch.saga'
import fetchOrganizationSearchSaga from './Filter_SAGA/fetchOrganizationSearch.saga'
import fetchFilteredEventsAdmin from './Filter_SAGA/fetchFilteredEventsAdmin.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user

export default function* rootSaga() {
  yield all([
    // login / registration
    loginSaga(),
    registrationSaga(),
    userSaga(),

    // Organizations
    addOrganizationsSaga(),
    fetchAllOrganizationsSaga(),
    fetchOrganization(),
    updateOrganization(),

    // Profile
    fetchProfile(),
    fetchProfileEvent(),
    addProfile(),
    updateProfile(),
    fetchSaveEventSaga(),
    postSaveEventSaga(),

    // Events
    addEvent(),
    deleteEvent(),
    fetchAdminEvents(),
    fetchApprovedEvents(),
    fetchEventId(),
    fetchOrgEvents(),
    fetchSavedEvents(),
    updateEvent(),
    fetchAdminPendingEvents(),
    deleteFaveEventSaga(),

    // Categories
    categories(),

    // Filters
    fetchApprovedSearch(),
    fetchPendingSearch(),
    fetchOrganizationSearchSaga(),
    fetchFilteredEventsAdmin(),
  ]);
}
