import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import OrganizationEventsList from './OrganizationEventsList';

function OrganizationView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const org = useSelector((store) => store.fetchOrganization);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    // Upon load, get the selected organization profile based on their user id
    dispatch({ type: 'FETCH_ORG_PROFILE', payload: id });
  }, []);

  // const id = user.org_id;
  console.log('ID is', id);
  console.log('org is', org);

  const handleEditClick = () => {
    history.push(`/organization-edit-form/${org.id}`);
  };

  return (
    <div className="org-view">
      <Grid container justifyContent="center">
        <div className="org-box">
          <Box
            component="img"
            sx={{
              height: 'auto',
              width: '400px',
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt=""
            src={org.image}
          />
        </div>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {org.name}
        </Typography>
      </Grid>
      <Box
        sx={{
          height: 25,
          display: 'flex',
          pr: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Button
          className="edit-button"
          size="small"
          variant="contained"
          onClick={handleEditClick}
        >
          <EditIcon fontSize="small" />
          Edit
        </Button>
      </Box>

      <Typography
        gutterBottom
        variant="subtitle1"
        component="div"
        color="white"
      >
        Description:
      </Typography>
      <Typography gutterBottom variant="body1" component="div" color="white">
        {org.description}
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Contact Info & Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="body1" component="div">
            Website: {org.website}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Email: {org.email}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Phone: {org.phone}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {org.housing}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            Location: {org.address1} {org.address2} {org.city}, {org.state}{' '}
            {org.zip}
          </Typography>
          <Grid container justifyContent="center">
            <iframe
              width="300"
              height="200"
              frameBorder={0}
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDX4e7v69d8lQVeWvBOcs-Bt9mFS2VVogg&q=${org.address1}${org.address2}${org.city}${org.state}${org.zip}`}
              allowFullScreen
            ></iframe>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Typography gutterBottom variant="header1" component="div" color="white">
        Events
      </Typography>
      <OrganizationEventsList />
      <BottomNavigation
        sx={{ width: 'auto' }}
        style={{ backgroundColor: 'rgb(75, 75, 75)' }}
      >
        {org.instagram === '' ? (
          <div></div>
        ) : (
          <div>
            {
              <Link href={org.instagram}>
                <BottomNavigationAction
                  icon={<InstagramIcon sx={{ color: 'white' }} />}
                />
              </Link>
            }
          </div>
        )}
        {org.twitter === '' ? (
          <div></div>
        ) : (
          <div>
            {
              <Link href={org.twitter}>
                <BottomNavigationAction
                  icon={<TwitterIcon sx={{ color: 'white' }} />}
                />
              </Link>
            }
          </div>
        )}
        {org.facebook === '' ? (
          <div></div>
        ) : (
          <div>
            {
              <Link href={org.facebook}>
                <BottomNavigationAction
                  icon={<FacebookIcon sx={{ color: 'white' }} />}
                />
              </Link>
            }
          </div>
        )}
      </BottomNavigation>
    </div>
  );
}

export default OrganizationView;
