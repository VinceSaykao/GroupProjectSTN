import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ShowMoreText from 'react-show-more-text';

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
import Container from '@mui/material/Container';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';


import OrganizationEventsList from './OrganizationEventsList';


import { Helmet } from 'react-helmet';

function OrganizationView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const org = useSelector((store) => store.fetchOrganization);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Upon load, get the selected organization profile based on their user id
    dispatch({ type: 'FETCH_ORG_PROFILE', payload: id });
  }, []);

  // const id = user.org_id;
  console.log('ID is', id);
  console.log('org is', org);

  const handleEditClick = () => {
    history.push(`/organization-edit-form/${org.id}`);
  };

  let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return (
        '+' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4]
      );
    }

    return null;
  };


  return (
    <Container sx={{ minHeight: 1200 }}>
      <Helmet>
        <style>{`body { background-color: #090909ee;); 
            }`}
        </style>
      </Helmet>
      <Box className="org-view" sx={{background:'#4444'}}>
        <BottomNavigation
          sx={{ width: 'auto' }}
          style={{ background: 'transparent' }}
        >
          {org.instagram === '' ? (
            <div></div>
          ) : (
            <div>
              {
                <Link href={org.instagram} target="blank">
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
                <Link href={org.twitter} target="blank">
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
                <Link href={org.facebook} target="blank">
                  <BottomNavigationAction
                    icon={<FacebookIcon sx={{ color: 'white' }} />}
                  />
                </Link>
              }
            </div>
          )}
        </BottomNavigation>
        <Grid container justifyContent="center">
          <div className="org-box">
            <Box
              component="img"
              sx={{
                height: 'auto',
                width: '400px',
                maxHeight: { xs: 200, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              src={org.image}
            />
          </div>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {org.name}
          </Typography>
        </Grid>

        {user.access_level >= 2 ? (
          <div>
            {
              <Box
                sx={{
                  height: 25,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // mr: 2,
                }}
              >
                <Button
                  className="edit-button"
                  size="small"
                  variant="contained"
                  onClick={handleEditClick}
                  sx={{background:'#444'}}
                >
                  <EditIcon fontSize="small" />
                  Edit
                </Button>
              </Box>
            }
          </div>
        ) : (
          <div></div>
        )}
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          color="white"
          sx={{ mr: 2, ml: 2, mt: 1 }}
        >
          <ShowMoreText
            lines={6}
            more={<Typography color="white" sx={{ textDecoration: 'underline' }} display="inline">Show More</Typography>}
            less={<Typography color="white" sx={{ textDecoration: 'underline' }} display="inline">Show Less</Typography>}
            className="content-css"
            anchorClass="my-anchor-css-class"
            expanded={false}
            width={300}
            truncatedEndingComponent={'... '}
          >
            {org.description}
          </ShowMoreText>
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: '#444',
              color: 'white',
            }}
          >
            <Typography>Contact Info & Location</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: 'rgb(101, 101, 101)',
              color: 'white',
            }}
          >
            <Link href={org.website} target="blank">
              <Typography
                gutterBottom
                variant="body1"
                color="white"
                component="div"
                sx={{ textDecoration: 'underline' }}
              >
                {org.website}
              </Typography>
            </Link>
            <Typography gutterBottom variant="body1" component="div" sx={{ textDecoration: 'underline' }} onClick={() => window.location = `mailto:${org.email}`}>
              {org.email}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {formatPhoneNumber(org.phone)}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {org.address1} {org.address2} {org.city}, {org.state} {org.zip}
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
        <Typography
          variant="h5"
          color="white"
          sx={{ m: 1, textAlign: 'center' }}
        >
          Events
        </Typography>
        <OrganizationEventsList />
      </Box>
    </Container>
  );
}

export default OrganizationView;
