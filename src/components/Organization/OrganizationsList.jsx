import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import OrganizationListItem from './OrganizationListItem';

import Grid from '@mui/material/Grid';

function OrganizationsList() {

  const orgs = useSelector((store) => store.fetchAllOrganizations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ORGANIZATIONS' });
  }, []);

  console.log(orgs);

  return (
    <>
      <div className="org-list-container">
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
    </>
  );
}

export default OrganizationsList;
