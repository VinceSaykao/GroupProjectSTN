import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import UserProfileItem from './UserProfileItem';
import UserSavedProfileEvent from './UserSavedProfileEvent';
import { actionChannel } from 'redux-saga/effects';
import { useParams, Link, useHistory } from 'react-router-dom';

import './UserProfilePage.css';

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Grid,
} from '@mui/material';

import { SettingsBrightnessOutlined } from '@mui/icons-material';

export default function UserProfile() {
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchProfile = useSelector((store) => store.fetchProfile[0]);
  const fetchSave = useSelector((store) => store.fetchSave);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_SAVE_EVENT' });
    dispatch({ type: 'SET_PROFILE_SAGA' });
  }, []);

  const handleEditClick = () => {
    history.push('/userprofileedit');
  };

  return (
    <div className='profile-container'>
      <Grid container justifyContent="center">
        <Typography color="white" variant="h4">Profile</Typography>
        <div >
          <Box
            component="img"
            sx={{
              height: 'auto',
              width: '400px',
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            src={fetchProfile?.image}
          />
          <Box
            sx={{
              height: 25,
              display: 'flex',
              pr: 1,
              justifyContent: 'center',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Button
              className="edit-button"
              size="small"
              variant="contained"
              onClick={handleEditClick}
            >
              Edit
            </Button>
          </Box>
        </div>
      </Grid>

      <Typography gutterBottom variant="body1" sx={{ ml: 2 }}>
        <Typography color="white">
          {fetchProfile?.first_name} {fetchProfile?.last_name}
        </Typography>
        <Typography color="white">{fetchProfile?.email}</Typography>
        <Typography color="white" sx={{ mt: 2 }}>
          About Me:
        </Typography>
        <Typography color="white" sx={{ mb: 2 }}>{fetchProfile?.bio}</Typography>
      </Typography>

      {fetchSave.map((info, i) => {
        return (
          <div key={i}>
            <UserProfileItem info={info} />
          </div>
        );
      })}
    </div>
  );
}
// end of UserProfile
