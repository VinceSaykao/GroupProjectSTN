import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import fetchProfile from "./Profile_Reducer/fetchProfile.reducer";
import fetchProfileEvent from "./Profile_Reducer/fetchProfileEvent.reducer";
import addProfile from "./Profile_Reducer/addProfile.reducer";
import updateProfile from "./Profile_Reducer/updateProfile.reducer";
import fetchOrganization from "./Organization_Reducer/fetchOrganization.reducer";
import fetchOrganizationEvent from "./Organization_Reducer/fetchOrganizationEvent.reducer";
import addOrganization from "./Organization_Reducer/addOrganization.reducer";
import updateOrganization from "./Organization_Reducer/updateOrganization.reducer";
import fetchEvent from "./Event_Reducers/fetchEvent.reducer";
import fetchEventAdmin from "./Event_Reducers/fetchEventAdmin.reducer";
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  fetchProfile,
  fetchProfileEvent,
  addProfile,
  updateProfile,
  fetchOrganization,
  fetchOrganizationEvent,
  addOrganization,
  updateOrganization,
  fetchEvent,
  fetchEventAdmin,
});

export default rootReducer;
