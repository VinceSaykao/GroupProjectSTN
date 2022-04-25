import OrgEventListItem from './OrgEventListItem';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

// ----material ui imports----
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';

// TAB MUI

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TabList from '@mui/lab/TabList';

import './OrganizationView.css';
import OrganizationPendingEventsListItem from './OrganizationPendingEventsListItem';
import { JoinRight } from '@mui/icons-material';

// MUI TAB FUNCTIONS

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// MUI TAB FUNCTIONS END

export default function OrganizationEventsList() {
  // store that grabs approved events, although fetchApprovedEvents brings in more data...??
  const approvedEvents = useSelector((store) => store.fetchApprovedEvents);
  const org = useSelector((store) => store.fetchOrganization);
  const user = useSelector((store) => store.user);
  const fetchPendingEvents = useSelector((store) => store.fetchPendingEvents.sort(sortEventsByStatus));

  // Alphabetical Sort Function (Sorting by Status)
  function sortEventsByStatus(a, b) {
    return b.status.localeCompare(a.status);
  }


  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect to grab the approved events
  useEffect(() => {
    dispatch({ type: 'FETCH_APPROVED_EVENTS' });
    dispatch({ type: 'FETCH_PENDING_EVENT_ADMIN' });
  }, []);

  // MUI TAB
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // END MUI TAB

  const orgEvents = approvedEvents.filter(
    (approvedEvents) => approvedEvents.org_id === org.id
  );



  // uh oh, big flaw with using user.org_id
  const pendingOrgEvents = fetchPendingEvents.filter(
    fetchPendingEvents => fetchPendingEvents.org_id === org.id
  );

  return (
    <div className="admin-event-view">
      <div>
        {user.access_level >= 2 ? (
          <Box
            className="event-tab"
            sx={{
              bgcolor: 'background.paper',
              height: '0px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'rgb(101, 101, 101)',
                  color: 'white',
                }}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Approved" {...a11yProps(0)} />
                <Tab label="Pending" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <div className="org-event-view">
                  <div className="org-event-list">
                    {orgEvents?.map((event, i) => {
                      return (
                        <div key={i}>
                          <OrgEventListItem event={event} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="org-event-view">
                  <div className="org-event-list">
                    {pendingOrgEvents?.map((events, i) => {
                      return (
                        <div key={i}>
                          <OrganizationPendingEventsListItem events={events} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabPanel>
            </SwipeableViews>
          </Box>
        ) : (
          <Box
            className="event-tab"
            sx={{
              bgcolor: 'background.paper',
              height: '0px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <div className="org-event-list">
              {orgEvents?.map((event, i) => {
                return (
                  <div key={i}>
                    <OrgEventListItem event={event} />
                  </div>
                );
              })}
            </div>
          </Box>
        )}
      </div>
    </div>
  );
}
