import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';

function OrganizationEditForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const org = useSelector((store) => store.fetchOrganization);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    // Upon load, get the selected organization profile based on their user id
    // setUpdate({...update, name: org.name})
    dispatch({ type: 'FETCH_ORG_PROFILE', payload: id });
  }, []);

  console.log('ID is', id);
  console.log('org is', org);

  // Storing the local updates to the organization in here
  const updateState = {
    name: org.name,
    email: org.email,
    phone: org.phone,
    website: org.website,
    twitter: org.twitter,
    facebook: org.facebook,
    instagram: org.instagram,
    description: org.description,
    image: org.image,
    address1: org.address1,
    address2: org.address2,
    city: org.city,
    state: org.state,
    zip: org.zip,
  };

  const updateOrg = (e) => {
    e.preventDefault();
    // Sending dispatch to saga to handle the edit organization function
    dispatch({ type: 'UPDATE_ORGANIZATION', payload: { update, id } });
    setUpdate(updateState); // reset the edit state to default
    history.push(`/organization-view/${org.id}`);
  };

  const cancel = (e) => {
    history.push(`/organization-view/${org.id}`);
  };

  const [update, setUpdate] = useState(updateState);

  return (
    <Box
      elevation={10}
      sx={{
        mx: 2
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // width: '500',
        // p: '5px',
      }}
    >
      <FormControl sx={{ width: '100%' }}>
        <Typography variant="h5" sx={{ mb: '10px' }}>
          Organization Details
        </Typography>

        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          label="Name"
          value={update.name}
          onChange={(e) => setUpdate({ ...update, name: e.target.value })}
        />
        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          multiline
          rows="5"
          label="Description"
          value={update.description}
          onChange={(e) =>
            setUpdate({ ...update, description: e.target.value })
          }
        />
        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          label="Image / Flyer"
          value={update.image}
          onChange={(e) => setUpdate({ ...update, image: e.target.value })}
        />

        <Typography variant="h5" sx={{}}>
          Social Media
        </Typography>

        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          label="Website"
          value={update.website}
          onChange={(e) =>
            setUpdate({ ...update, website: e.target.value })
          }
        />
        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          label="Twitter URL"
          value={update.twitter}
          onChange={(e) =>
            setUpdate({ ...update, twitter: e.target.value })
          }
        />
        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          label="Facebook URL"
          value={update.facebook}
          onChange={(e) =>
            setUpdate({ ...update, facebook: e.target.value })
          }
        />
        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          label="Instagram URL"
          value={update.instagram}
          onChange={(e) =>
            setUpdate({ ...update, instagram: e.target.value })
          }
        />

        <Typography variant="h5" sx={{}}>
          Contact & Location
        </Typography>

        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          label="Email"
          value={update.email}
          onChange={(e) => setUpdate({ ...update, email: e.target.value })}
        />
        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="number"
          label="Phone"
          value={update.phone}
          onChange={(e) => setUpdate({ ...update, phone: e.target.value })}
        />

        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          label="Address 1"
          value={update.address1}
          onChange={(e) =>
            setUpdate({ ...update, address1: e.target.value })
          }
        />
        <TextField
          sx={{ margin: '10px' }}
          autoComplete="off"
          type="text"
          label="Address 2"
          value={update.address2}
          onChange={(e) =>
            setUpdate({ ...update, address2: e.target.value })
          }
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              label="City"
              value={update.city}
              onChange={(e) => setUpdate({ ...update, city: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              label="State"
              value={update.state}
              onChange={(e) =>
                setUpdate({ ...update, state: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="number"
              label="Zip Code"
              value={update.zip}
              onChange={(e) => setUpdate({ ...update, zip: e.target.value })}
            />
          </Grid>
        </Grid>
      </FormControl>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mt: '10px',
        }}
      >
        <Button
          variant="outlined"
          onClick={updateOrg}
          sx={{ margin: '10px' }}
        >
          <Typography variant="h6">Update</Typography>
        </Button>
        <Button variant="outlined" onClick={cancel} sx={{ margin: '10px' }}>
          <Typography variant="h6">Cancel</Typography>
        </Button>
      </Box>
    </Box>

  );
}

export default OrganizationEditForm;
