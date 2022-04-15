import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
// Profile
import fetchProfile from "./Profile_Reducer/fetchProfile.reducer";
import fetchProfileEvent from "./Profile_Reducer/fetchProfileEvent.reducer";
import addProfile from "./Profile_Reducer/addProfile.reducer";
import updateProfile from "./Profile_Reducer/updateProfile.reducer";
// Organizations
import fetchOrganization from "./Organization_Reducer/fetchOrganization.reducer";
import fetchOrganizationEvent from "./Organization_Reducer/fetchOrganizationEvent.reducer";
import addOrganization from "./Organization_Reducer/addOrganization.reducer";
import updateOrganization from "./Organization_Reducer/updateOrganization.reducer";
import fetchAllOrganizations from "./Organization_Reducer/fetchAllOrganizations.reducer";
// Events
import fetchApprovedEvents from "./Event_Reducers/fetchApprovedEvents.reducer";
import fetchAdminEvents from "./Event_Reducers/fetchAdminEvents.reducer";
import fetchOrgEvents from "./Event_Reducers/fetchOrgEvents.reducer";
import fetchEventId from "./Event_Reducers/fetchEventId.reducer";
import addEvent from "./Event_Reducers/addEvent.reducer";
import updateEvent from "./Event_Reducers/updateEvent.reducer";
import fetchSavedEvents from "./Event_Reducers/fetchSavedEvents.reducer";
import fetchPendingEvents from "./Event_Reducers/fetchPendingEvents.reducer";
// Categories
import categories from './categories.reducer';





// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'

const rootReducer = combineReducers({
  // login / registration
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  // Profile
  fetchProfile,
  fetchProfileEvent,
  addProfile,
  updateProfile,
  // Organization
  fetchOrganization,
  fetchOrganizationEvent,
  addOrganization,
  updateOrganization,
  // Event
  fetchApprovedEvents,
  fetchAdminEvents,
  fetchOrgEvents,
  fetchEventId,
  addEvent,
  updateEvent,
  fetchSavedEvents,
  fetchAllOrganizations,
  fetchPendingEvents,
  // Categories
  categories,
});

export default rootReducer;
