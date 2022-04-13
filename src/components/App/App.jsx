import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

// User Profile
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import UserProfileEditForm from '../UserProfilePage/UserProfileEditForm';
// import OrganizationView from '../Organization/OrganizationView'


// Admin 
// import AdminEventList from '../Admin/AdminApprovedEvents/AdminEventList';
// import AdminEventDetails from '../Admin/AdminApprovedEvents/AdminEventDetails';
// import AdminPendingEventList from '../Admin/AdminPendingEvents/AdminPendingEventList';
// import AdminPendingEventDetails from '../Admin/AdminPendingEvents/AdminPendingEventDetails';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          {/* ADMIN START */}
          {/* <ProtectedRoute

            exact
            path="/admin-approved-event-details"
          >
            <AdminEventDetails />
          </ProtectedRoute>

          <ProtectedRoute

            exact
            path="/adminlist"
          >
            <AdminEventList />
          </ProtectedRoute>

          <ProtectedRoute

            exact
            path="/admin-pending-list"
          >
            <AdminPendingEventList />
          </ProtectedRoute>




          <ProtectedRoute

            exact
            path="/admin-pending-event-details"
          >
            <AdminPendingEventDetails/>
          </ProtectedRoute> */}


          {/* ADMIN END */}

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          {/* <ProtectedRoute
            exact
            path="/organization-view"
          >
            <OrganizationView />
          </ProtectedRoute> */}

          <Route
            exact
            path="/userprofile"
          >

            <UserProfilePage />

          </Route>

          <Route
            exact
            path="/userprofileedit"
          >

            <UserProfileEditForm />

          </Route>



          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
