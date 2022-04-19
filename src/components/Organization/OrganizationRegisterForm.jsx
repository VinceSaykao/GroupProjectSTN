import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
} from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function AddOrganization() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const user_org_id = useSelector((store => store.fetchUserOrgID))

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
    city:'',
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
      dispatch({ type: 'ADD_ORGANIZATION', payload: {newOrg, history} });
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
    <>
      <Container sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
        <Box
          elevation={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '500px',
            p: '20px',
          }}
        >
          <FormControl sx={{ width: '100%' }}>
            <Typography variant="h5" sx={{ mb: '25px' }}>
              Add Organization Info
            </Typography>
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              label="Name"
              required
              value={newOrg.name}
              onChange={(e) => setNewOrg({ ...newOrg, name: e.target.value })}
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              label="Email"
              required
              value={newOrg.email}
              onChange={(e) => setNewOrg({ ...newOrg, email: e.target.value })}
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Phone"
              value={newOrg.phone}
              onChange={(e) => setNewOrg({ ...newOrg, phone: e.target.value })}
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              required
              label="Website"
              value={newOrg.website}
              onChange={(e) =>
                setNewOrg({ ...newOrg, website: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Twitter URL"
              value={newOrg.twitter}
              onChange={(e) =>
                setNewOrg({ ...newOrg, twitter: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
             
              label="Facebook URL"
              value={newOrg.facebook}
              onChange={(e) =>
                setNewOrg({ ...newOrg, facebook: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Instagram URL"
              value={newOrg.instagram}
              onChange={(e) =>
                setNewOrg({ ...newOrg, instagram: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
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
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Image"
              value={newOrg.image}
              onChange={(e) =>
                setNewOrg({ ...newOrg, image: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Address 1"
              value={newOrg.address1}
              onChange={(e) =>
                setNewOrg({ ...newOrg, address1: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              label="Address 2"
              value={newOrg.address2}
              onChange={(e) =>
                setNewOrg({ ...newOrg, address2: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="City"
              value={newOrg.city}
              onChange={(e) =>
                setNewOrg({ ...newOrg, city: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="State"
              value={newOrg.state}
              onChange={(e) =>
                setNewOrg({ ...newOrg, state: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="number"
              required
              label="Zip Code"
              value={newOrg.zip}
              onChange={(e) =>
                setNewOrg({ ...newOrg, zip: e.target.value })
              }
            />
          </FormControl>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: '10px',
            }}
          >
            <Button variant="outlined" onClick={addOrg} sx={{ margin: '10px' }}>
              <Typography variant="h6">Submit</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default AddOrganization;
