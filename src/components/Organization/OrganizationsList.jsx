// ---- react imports ---------
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import OrganizationListItem from './OrganizationListItem';

// ---- material ui imports ----
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { Divider, Typography } from '@mui/material';

// ---- CSS imports -------------
import '../Admin/AdminApprovedEvents/AdminEventList.scss';

import { Helmet } from 'react-helmet';

function OrganizationsList() {
  const orgs = useSelector((store) => store.fetchAllOrganizations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ORGANIZATIONS' });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    // if user enters search
    if (event.target.value.length > 0) {
      dispatch({
        type: 'FETCH_ORGANIZATION_SEARCH',
        payload: { search: event.target.value },
      });
    }
    // if search is left blank
    else {
      dispatch({ type: 'FETCH_ORGANIZATIONS' });
    }
  };

  return (
    <div className="org-list-container">
      <Helmet>
        <style>{`body { background-color: #090909ee;); 
            }`}
        </style>
      </Helmet>
      <Typography variant="h4" color="white" sx={{ textAlign: 'center', my: 2 }}>
        Organizations
      </Typography>
      <Box className="admin-search-div" sx={{ my: 2 }}>
        <InputBase
          sx={{ ml: 5, flex: 1, bgcolor: 'white', }}
          placeholder="Search"
          onChange={(event) => handleSearch(event)}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        {orgs?.map((org, index) => {
          return (
            <Grid key={index} item xs={3}>
              <OrganizationListItem key={index} org={org} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default OrganizationsList;
