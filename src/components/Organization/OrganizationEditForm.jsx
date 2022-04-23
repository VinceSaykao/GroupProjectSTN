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
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// CSS for Icons
import '../Admin/AdminForm/CategoryItem.css';

// CUSTOM MUI Phone TextField
import MuiPhoneNumber from 'material-ui-phone-number';

// import { Helmet } from 'react-helmet';

function OrganizationEditForm() {

  // Included for USA State Dropdown
  let usaStateList = [
    { value: 'AK', text: 'Alaska' },
    { value: 'AL', text: 'Alabama' },
    { value: 'AR', text: 'Arkansas' },
    { value: 'AS', text: 'American Samoa' },
    { value: 'AZ', text: 'Arizona' },
    { value: 'CA', text: 'California' },
    { value: 'CO', text: 'Colorado' },
    { value: 'CT', text: 'Connecticut' },
    { value: 'DC', text: 'District of Columbia' },
    { value: 'DE', text: 'Delaware' },
    { value: 'FL', text: 'Florida' },
    { value: 'GA', text: 'Georgia' },
    { value: 'GU', text: 'Guam' },
    { value: 'HI', text: 'Hawaii' },
    { value: 'IA', text: 'Iowa' },
    { value: 'ID', text: 'Idaho' },
    { value: 'IL', text: 'Illinois' },
    { value: 'IN', text: 'Indiana' },
    { value: 'KS', text: 'Kansas' },
    { value: 'KY', text: 'Kentucky' },
    { value: 'LA', text: 'Louisiana' },
    { value: 'MA', text: 'Massachusetts' },
    { value: 'MD', text: 'Maryland' },
    { value: 'ME', text: 'Maine' },
    { value: 'MI', text: 'Michigan' },
    { value: 'MN', text: 'Minnesota' },
    { value: 'MO', text: 'Missouri' },
    { value: 'MS', text: 'Mississippi' },
    { value: 'MT', text: 'Montana' },
    { value: 'NC', text: 'North Carolina' },
    { value: 'ND', text: 'North Dakota' },
    { value: 'NE', text: 'Nebraska' },
    { value: 'NH', text: 'New Hampshire' },
    { value: 'NJ', text: 'New Jersey' },
    { value: 'NM', text: 'New Mexico' },
    { value: 'NV', text: 'Nevada' },
    { value: 'NY', text: 'New York' },
    { value: 'OH', text: 'Ohio' },
    { value: 'OK', text: 'Oklahoma' },
    { value: 'OR', text: 'Oregon' },
    { value: 'PA', text: 'Pennsylvania' },
    { value: 'PR', text: 'Puerto Rico' },
    { value: 'RI', text: 'Rhode Island' },
    { value: 'SC', text: 'South Carolina' },
    { value: 'SD', text: 'South Dakota' },
    { value: 'TN', text: 'Tennessee' },
    { value: 'TX', text: 'Texas' },
    { value: 'UT', text: 'Utah' },
    { value: 'VA', text: 'Virginia' },
    { value: 'VI', text: 'Virgin Islands' },
    { value: 'VT', text: 'Vermont' },
    { value: 'WA', text: 'Washington' },
    { value: 'WI', text: 'Wisconsin' },
    { value: 'WV', text: 'West Virginia' },
    { value: 'WY', text: 'Wyoming' },
  ];

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const org = useSelector((store) => store.fetchOrganization);

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
      sx={{
        mx: 2,
      }}
    >
      {/* <Helmet>
        <style>
          {`body { background-color: rgb(75, 75, 75);); 
        }`}
        </style>
      </Helmet> */}
      <FormControl>
        <Typography variant="h5"  sx={{ mb: '10px' }}>
          Organization Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Name"
              value={update.name}
              onChange={(e) => setUpdate({ ...update, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Image / Flyer"
              value={update.image}
              onChange={(e) => setUpdate({ ...update, image: e.target.value })}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
          Social Media
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              label="Website"
              value={update.website}
              onChange={(e) =>
                setUpdate({ ...update, website: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Twitter URL"
              value={update.twitter}
              onChange={(e) =>
                setUpdate({ ...update, twitter: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Facebook URL"
              value={update.facebook}
              onChange={(e) =>
                setUpdate({ ...update, facebook: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Instagram URL"
              value={update.instagram}
              onChange={(e) =>
                setUpdate({ ...update, instagram: e.target.value })
              }
            />
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
          Contact & Location
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Email"
              value={update.email}
              onChange={(e) => setUpdate({ ...update, email: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <MuiPhoneNumber
              variant="outlined"
              fullWidth
              autoComplete="off"
              defaultCountry={'us'}
              onlyCountries={['us', 'ca', 'mx', 'pr']}
              disableAreaCodes
              label="Phone #"
              value={update.phone}
              onChange={(e) => setUpdate({ ...update, phone: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Address 1"
              value={update.address1}
              onChange={(e) =>
                setUpdate({ ...update, address1: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Address 2"
              value={update.address2}
              onChange={(e) =>
                setUpdate({ ...update, address2: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="City"
              value={update.city}
              onChange={(e) => setUpdate({ ...update, city: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ minWidth: '100%' }}>
              <InputLabel id="state">State</InputLabel>
              <Select
                autoComplete="off"
                label="State"
                value={update.state}
                onChange={(e) =>
                  setUpdate({ ...update, state: e.target.value })}
              >
                {usaStateList.map((usaState) => (
                  <MenuItem key={usaState.value} value={usaState.value}>
                    {usaState.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              autoComplete="off"
              type="number"
              inputProps={{ maxLength: 5 }}
              label="Zip"
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
        <Button variant="contained" onClick={updateOrg} sx={{ margin: '10px' }}>
          <Typography variant="h6">Update</Typography>
        </Button>
        <Button variant="contained" onClick={cancel} sx={{ margin: '10px' }}>
          <Typography variant="h6">Cancel</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default OrganizationEditForm;
