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
  Avatar,
} from '@mui/material';

import { Helmet } from 'react-helmet';

import EditIcon from '@mui/icons-material/Edit';

import { SettingsBrightnessOutlined } from '@mui/icons-material';

export default function UserProfile() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SAVE_EVENT' });
    // dispatch({ type: 'SET_PROFILE_SAGA' });
  }, []);

  const handleEditClick = () => {
    history.push('/userprofileedit');
  };

  // const fetchProfile = useSelector((store) => store.fetchProfile[0]);
  const user = useSelector((store) => store.user);
  const fetchSave = useSelector((store) => store.fetchSave);

  return (
    <div className="profile-container">
      <Helmet>
        <style>
          {`body { background-color: rgb(75, 75, 75);); 
            }`}
        </style>
      </Helmet>
      <Grid container justifyContent="center">
        <Typography
          color="white"
          variant="h4"
          sx={{ width: '100%', textAlign: 'center' }}
        >
          Profile
        </Typography>
        <div>
          <Avatar
            className="avatar"
            sx={{ width: 200, height: 200 }}
            src={user?.image}
          />

          <Box
            sx={{
              height: 25,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 1,
              mt: 2,
            }}
          >
            <Button
              className="edit-button"
              size="small"
              variant="contained"
              onClick={handleEditClick}
            >
              <EditIcon fontSize="small" />
              Edit
            </Button>
            <Button
              className="edit-button"
              size="small"
              variant="contained"
              onClick={handleEditClick}
            >
              <EditIcon fontSize="small" />
              Update Photo
            </Button>
          </Box>
        </div>
      </Grid>

      <Typography gutterBottom variant="body1" sx={{ ml: 2 }}>
        <Typography color="white">
          {user?.first_name} {user?.last_name}
        </Typography>
        <Typography color="white">{user?.email}</Typography>
        <Typography color="white" sx={{ mt: 2 }}>
          About Me:
        </Typography>
        <Typography color="white" sx={{ mb: 2 }}>
          {user?.bio}
        </Typography>
      </Typography>
      <Box
        sx={{
          height: 30,
          display: 'flex',
          pr: 1,
          justifyContent: 'center',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Typography variant="h5" color="white">
          Saved Events
        </Typography>
      </Box>

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
