import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

function AddOrganization() {
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

  const user = useSelector((store) => store.user);
  const user_org_id = useSelector((store) => store.fetchUserOrgID);

  console.log('user_org_id is', user_org_id);

  const orgState = {
    user_id: user.id,
    name: '',
    email: '',
    phone: '',
    website: '',
    twitter: '',
    facebook: '',
    instagram: '',
    description: '',
    image: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  };

  const [newOrg, setNewOrg] = useState(orgState);

  const addOrg = (event) => {
    // If all fields have valid inputs, continue
    if (
      (newOrg.name,
      newOrg.email,
      newOrg.phone,
      newOrg.website,
      newOrg.twitter,
      newOrg.facebook,
      newOrg.instagram,
      newOrg.description,
      newOrg.image,
      newOrg.address1,
      newOrg.address2,
      newOrg.city,
      newOrg.state,
      newOrg.zip)
    ) {
      event.preventDefault();
      dispatch({ type: 'ADD_ORGANIZATION', payload: { newOrg, history } });
      setNewOrg(orgState);
      // setTimeout(() => {
      //   history.push(`/organization-view/${user.org_id}`); // Go to profile page after entering org info
      // }, 1000)
    } else {
      // If a field is not filled out
      alert('Please fill out all required* input fields');
    }
  };

  return (
    <Box
      sx={{
        mx: 2,
      }}
    >
      <FormControl>
        <Typography variant="h5" sx={{ mb: '10px' }}>
          Add Organization Info
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Name"
              required
              value={newOrg.name}
              onChange={(e) => setNewOrg({ ...newOrg, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              sx={{ mb: 2 }}
              autoComplete="off"
              type="text"
              required
              multiline
              rows="5"
              label="Description"
              value={newOrg.description}
              onChange={(e) =>
                setNewOrg({ ...newOrg, description: e.target.value })
              }
            />
            <Grid item xs={12}>
              <TextField
                fullWidth
                autoComplete="off"
                type="text"
                required
                label="Image / Flyer"
                value={newOrg.image}
                onChange={(e) =>
                  setNewOrg({ ...newOrg, image: e.target.value })
                }
              />
            </Grid>
          </Grid>

          <Typography variant="h5" sx={{ mt: 2, ml: 2 }}>
            Social Media
          </Typography>

          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              required
              label="Website"
              value={newOrg.website}
              onChange={(e) =>
                setNewOrg({ ...newOrg, website: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              required
              label="Twitter URL"
              value={newOrg.twitter}
              onChange={(e) =>
                setNewOrg({ ...newOrg, twitter: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Facebook URL"
              value={newOrg.facebook}
              onChange={(e) =>
                setNewOrg({ ...newOrg, facebook: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              required
              label="Instagram URL"
              value={newOrg.instagram}
              onChange={(e) =>
                setNewOrg({ ...newOrg, instagram: e.target.value })
              }
            />
          </Grid>

          <Typography variant="h5" sx={{ mt: 2, ml: 2 }}>
            Contact & Location
          </Typography>

          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Email"
              required
              value={newOrg.email}
              onChange={(e) => setNewOrg({ ...newOrg, email: e.target.value })}
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
              value={newOrg.phone}
              onChange={(e) => setNewOrg({ ...newOrg, phone: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              required
              label="Address 1"
              value={newOrg.address1}
              onChange={(e) =>
                setNewOrg({ ...newOrg, address1: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              label="Address 2"
              value={newOrg.address2}
              onChange={(e) =>
                setNewOrg({ ...newOrg, address2: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              autoComplete="off"
              type="text"
              required
              label="City"
              value={newOrg.city}
              onChange={(e) => setNewOrg({ ...newOrg, city: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
          <FormControl sx={{ minWidth: '100%' }}>
              <InputLabel id="state">State</InputLabel>
              <Select
                autoComplete="off"
                label="State"
              value={newOrg.state}
              onChange={(e) => setNewOrg({ ...newOrg, state: e.target.value })}
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
              required
              inputProps={{ maxLength: 5 }}
              label="Zip Code"
              value={newOrg.zip}
              onChange={(e) => setNewOrg({ ...newOrg, zip: e.target.value })}
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
        <Button variant="contained" onClick={addOrg} sx={{ margin: '10px' }}>
          <Typography variant="h6">Submit</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default AddOrganization;
