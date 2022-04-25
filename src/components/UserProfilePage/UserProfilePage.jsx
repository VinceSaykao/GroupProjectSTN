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
    // dispatch({type: 'FETCH_USER'})
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
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>
      <Grid container justifyContent="center">

        <div>
          <Avatar
            className="avatar"
            sx={{ width: 200, height: 200 }}
            src={user?.image}
          />


        </div>
      </Grid>

      <Typography gutterBottom variant="body1" sx={{ ml: 2 }}>
        <Typography
          sx={{ color: 'white', textAlign: 'center', fontSize: '30px', }}
        >
          <b>{user?.first_name} {user?.last_name}</b>
        </Typography>
        {/* <Typography color="white">{user?.email}</Typography> */}

        <Typography sx={{ textAlign: 'center', color: '#e6e6e6', fontSize: '20px', }}>
          {user?.bio}
        </Typography>
      </Typography>



      <Box
        sx={{
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2,
          borderBottom: '2px solid #e6e6e6',
        }}
      >
        <Button
          className="edit-button"
          size="small"
          variant="contained"
          onClick={handleEditClick}
          sx={{ background: 'grey', mt: -2,}}
     
        >
          <EditIcon fontSize="small" />    
          Edit Profile
        </Button>
        {/* <Button
              className="edit-button"
              size="small"
              variant="contained"
              onClick={handleEditClick}
            >
              <EditIcon fontSize="small" />
              Update Photo
            </Button> */}
      </Box>



      <Box
        sx={{
          height: 30,
          textAlign: 'center',
          mt: 1,
        }}
      >
        <Typography variant="h5" color="white">
          <b> Saved Events </b>
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
