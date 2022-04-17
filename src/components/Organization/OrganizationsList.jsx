import { useSelector } from 'react-redux';
import OrganizationListItem from './OrganizationListItem';

import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

function OrganizationsList() {
  const organizations = useSelector((store) => store.fetchAllOrganizations);

  // organizations.filter(org.org_name => org.org_name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <div className="org-list-container">
        <Box textAlign={'center'} sx={{m:2}}>
          <Typography variant="h6"> # of Organizations: {organizations.length + 37}</Typography>
        </Box>
        <Box className="searchOrganizations" textAlign="center">
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={5}
            sx={{ color: 'white', mt: 1, mb: 1, width: 325, mb:2  }}
            required
            label="Search"
            color="primary"
            autoComplete="off"
            onChange={(event) => {addSearch}}
            // value={search}
          />
        </Box>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          {organizations.map((organization, index) => {
            return (
              <Grid key={index} item xs={3}>
                <OrganizationListItem key={index} organization={organization} />
              </Grid>
            );
          })}
        </Grid>
        {/* <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          {organizations.map((organization, index) => {
            return (
              <Grid key={index} item xs={3}>
                <OrganizationItem key={index} organization={organization} />
              </Grid>
            );
          })}
        </Grid> */}
      </div>
    </>
  );
}

export default OrganizationsList;