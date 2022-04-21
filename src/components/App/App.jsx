import React, { useEffect } from 'react';

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


import { format } from 'date-fns'

import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterForm from '../RegisterForm/RegisterForm';


// User Profile
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import UserProfileEditForm from '../UserProfilePage/UserProfileEditForm';
import OrganizationView from '../Organization/OrganizationView'
import OrganizationEditForm from '../Organization/OrganizationEditForm';
import OrganizationRegisterForm from '../Organization/OrganizationRegisterForm'
import OrganizationsList from '../Organization/OrganizationsList'
import UserCalanderView from '../UserCalanderView/UserCalanderView';

// Admin 
import AdminEventList from '../Admin/AdminApprovedEvents/AdminEventList';
import AdminEventDetails from '../Admin/AdminApprovedEvents/AdminEventDetails';
import AdminPendingEventList from '../Admin/AdminPendingEvents/AdminPendingEventList';
import AdminPendingEventDetails from '../Admin/AdminPendingEvents/AdminPendingEventDetails';

import AdminEventCreate from '../Admin/AdminForm/AdminEventCreate';
import AdminEventEdit from '../Admin/AdminForm/AdminEventEdit';
import AdminEventCopy from '../Admin/AdminForm/AdminEventCopy';

import './App.css';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(store => store.user);


  const dateNow = format(new Date(), 'yyyy/MM/dd')

  // fetch approved events
  const events = useSelector(store => store.fetchAdminEvents);

  console.log('this is events: ', events)

//     const expiredEvents = events.filter(
//     (events) => events.stop_date < dateNow
//   );

//   console.log('this filters: ', expiredEvents );

// const something = () => {

//   console.log('dsajfsdjflkdjfkdfk')
//   {expiredEvents.map((exp) => {

//     const dateNow = format(new Date(), 'yyyy/MM/dd')
//     if (exp.end_date < dateNow) {
//       console.log('expired!!!!!!!!!!!!!!!!')
//       dispatch({
//           type: 'UPDATE_EVENT',
//           payload:
//           {
//               id: exp.id,
//               org_id: exp.org_id,
//               category_id: exp.category_id,
//               status: 'expired',
//               name: exp.name,
//               description: exp.description,
//               date: exp.date,
//               link: exp.link,
//               start_date: exp.start_date,
//               end_date: exp.end_date,
//               start_time: exp.start_time,
//               end_time: exp.end_time,
//               image: exp.image,
//               email: exp.email,
//               phone: exp.phone,
//               address1: exp.address1,
//               address2: exp.address2,
//               city: exp.city,
//               zip: exp.zip,
//               state: exp.state,
//               feedback: exp.feedback,
//           }
//       });
//   } else {
//       console.log('not expired');
//   }
//   })}
// }


  // dispatch saga -> loop for each event.id axios.put /:id ,  run the put


  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({ type: 'FETCH_EVENT_ADMIN' });
    // something();
  }, []);








  //   const handleExpired = () => {

  //     const dateNow = format(new Date(), 'yyyy/MM/dd')

  //     const exp = fetchEventId[0];

  //     // console.log('this is fetch', fetchEventId);


  //     // console.log(exp.end_date);
  //     // console.log(dateNow);


  //     if (exp.end_date < dateNow) {
  //         console.log('expired')

  //         // dispatch({
  //         //     type: 'UPDATE_EVENT',
  //         //     payload:
  //         //     {
  //         //         id: exp.id,
  //         //         org_id: exp.org_id,
  //         //         category_id: exp.category_id,
  //         //         status: expired,
  //         //         name: exp.name,
  //         //         description: exp.description,
  //         //         date: exp.date,
  //         //         link: exp.link,
  //         //         start_date: exp.start_date,
  //         //         end_date: exp.end_date,
  //         //         start_time: exp.start_time,
  //         //         end_time: exp.end_time,
  //         //         image: exp.image,
  //         //         email: exp.email,
  //         //         phone: exp.phone,
  //         //         address1: exp.address1,
  //         //         address2: exp.address2,
  //         //         city: exp.city,
  //         //         zip: exp.zip,
  //         //         state: exp.state,
  //         //         feedback: exp.feedback,
  //         //     }
  //         // });
  //     } else {
  //         console.log('not expired');
  //     }


  // }; // end of handleExpired

  return (
    <Router>
      <div>
        <Nav />

        <Switch>

          {/* --------------------------------------------------
              ADMIN COMPONENTS 
          ---------------------------------------------------*/}

          <Route exact path="/approved-events">
            <AdminEventDetails />
          </Route>

          <ProtectedRoute exact path="/adminlist">
            {user.access_level === 3 ?
              <AdminEventList />
              :
              <LandingPage />
            }
          </ProtectedRoute>

          <ProtectedRoute exact path="/admin-pending-list">
            {user.access_level === 3 ?
              <AdminPendingEventList />
              :
              <LandingPage />
            }
          </ProtectedRoute>

          <ProtectedRoute exact path="/admin-pending-event-details">
            {user.access_level === 3 ?
              <AdminPendingEventDetails />
              :
              <LandingPage />
            }
          </ProtectedRoute>

          <ProtectedRoute exact path="/admin-event-create">
            <AdminEventCreate />
          </ProtectedRoute>

          <ProtectedRoute exact path="/admin-event-edit/:id">
            <AdminEventEdit />
          </ProtectedRoute>

          <ProtectedRoute exact path="/admin-event-copy/:id">
            <AdminEventCopy />
          </ProtectedRoute>

          {/* --------------------------------------------------
              ORGANIZATION COMPONENTS
          ---------------------------------------------------*/}

          <ProtectedRoute
            exact
            path="/organization-register-form"
          >
            <OrganizationRegisterForm />
          </ProtectedRoute>

          <Route exact path="/organization-view/:id">
            <OrganizationView />
          </Route>

          <ProtectedRoute exact path="/organization-edit-form/:id">
            <OrganizationEditForm />
          </ProtectedRoute>

          <Route exact path="/organizations-list">
            <OrganizationsList />
          </Route>

          {/* --------------------------------------------------
              USER / PROFILE COMPONENTS
          ---------------------------------------------------*/}

          {/* logged in shows InfoPage else shows LoginPage */}
          <Route exact path="/calanderview">
            <UserCalanderView />
          </Route>

          <Route exact path="/userprofile">
            <UserProfilePage />
          </Route>

          <Route exact path="/userprofileedit">
            <UserProfileEditForm />
          </Route>

          {/* --------------------------------------------------
              GENERAL COMPONENTS
          ---------------------------------------------------*/}

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user2 page
              <Redirect to="/user2" />
            ) : (
              // Otherwise, show the login page
              <RegisterForm />
            )}
          </Route>
          <Route exact path="/user2">
            {user.access_level === 1 ? (
              // If the user is an volunteer,
              // redirect them to the calender view
              <Redirect to="/calanderview" />
            ) : (
              // Otherwise, they are an organization
              // redirect them to their the organization creation form
              <Redirect to="/organization-register-form" />
            )}
          </Route>

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

          <Route exact path="/login">
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route exact path="/home">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* logged in shows InfoPage else shows LoginPage */}
          <ProtectedRoute exact path="/info">
            <InfoPage />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;