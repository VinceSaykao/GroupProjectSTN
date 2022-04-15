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
    <>
      <Grid container justifyContent="center">
        <Typography gutterBottom variant="h6" component="div">
          {org.name}
        </Typography>
        <div className="org-box">
          <Box
            component="img"
            sx={{
              height: 'auto',
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt=""
            src={org.image}
          />
          <Button
            className="edit-button"
            size="small"
            variant="contained"
            onClick={handleEditClick}
          >
            Edit
          </Button>
        </div>
      </Grid>
      <Typography gutterBottom variant="subtitle2" component="div">
        Description:
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        {org.description}
      </Typography>
      <Typography gutterBottom variant="subtitle2" component="div">
        Events:
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        {}//Organization's events list component will go here
      </Typography>
      <Typography gutterBottom variant="subtitle2" component="div">
        Contact Information:
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        {org.website} {org.email} {org.phone}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        {org.housing}
      </Typography>
      <Typography gutterBottom variant="subtitle2" component="div">
        Location:
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
        <BottomNavigation sx={{ width: 'auto' }}>
          <Link 
          href={org.instagram}>
            <BottomNavigationAction icon={<InstagramIcon />} />
          </Link>
          <Link href={org.twitter}>
            <BottomNavigationAction icon={<TwitterIcon />} />
          </Link>
          <Link href={org.facebook}>
            <BottomNavigationAction icon={<FacebookIcon />} />
          </Link>
        </BottomNavigation>
      </Grid>
    </>
  );
}

export default OrganizationView;
