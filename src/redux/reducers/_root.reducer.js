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
// Events
import fetchEvent from "./Event_Reducers/fetchEvent.reducer";
import fetchEventAdmin from "./Event_Reducers/fetchEventAdmin.reducer";
import fetchEventOrganization from "./Event_Reducers/fetchEventOrganization.reducer";
import fetchEventProfile from "./Event_Reducers/fetchEventProfile.reducer";
import addEvent from "./Event_Reducers/addEvent.reducer";
import updateEvent from "./Event_Reducers/updateEvent.reducer";

import fetchAllOrganizations from "./Organization_Reducer/fetchAllOrganizations.reducer";
import fetchOrganization from "./Organization_Reducer/fetchOrganization.reducer";
import addOrganization from "./Organization_Reducer/addOrganization.reducer";
import fetchOrganizationEvent from "./Organization_Reducer/fetchOrganizationEvent.reducer";
import updateOrganization from "./Organization_Reducer/updateOrganization.reducer"





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
  fetchEvent,
  fetchEventAdmin,
  fetchEventOrganization,
  fetchEventProfile,
  addEvent,
  updateEvent,
  fetchAllOrganizations,
  fetchOrganization,
  addOrganization,
  fetchOrganizationEvent,
  updateOrganization,
});

export default rootReducer;
