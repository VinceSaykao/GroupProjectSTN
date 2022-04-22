import { InfoRounded } from '@mui/icons-material';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { actionChannel } from 'redux-saga/effects';
import UserProfileEditForm from './UserProfileEditForm';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Grid,
} from '@mui/material';

import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';


// Icons
import icon_cleanup from '../../category_icons/icon_cleanup.png'
import icon_community_meeting from '../../category_icons/icon_community_meeting.png'
import icon_donations from '../../category_icons/icon_donations.png'
import icon_drives from '../../category_icons/icon_drives.png'
import icon_education from '../../category_icons/icon_education.png'
import icon_events from '../../category_icons/icon_events.png'
import icon_popups from '../../category_icons/icon_popups.png'
import icon_other from '../../category_icons/icon_other.png'
import { intlFormat } from 'date-fns';
import StarIcon from '@mui/icons-material/Star';


function UserProfileItem({ info, detail }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory();

  console.log('info = ', info);

  const handleFaveEventClick = () => {
    alert('You sure?')
    dispatch({
      type: 'DELETE_FAVE_EVENT',
      payload: { user_id: user.id, event_id: info.event_id },
    });
    dispatch({ type: 'FETCH_SAVE_EVENT' });
  };

  const handleClick = () => {
    // will dispatch the event id that grabs that specific event
    dispatch({ type: 'FETCH_EVENT_DETAILS', payload: info.event_id });

    // push to this url
    history.push('/approved-events');
  }; // end of handleClick

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    marginBottom: '30px',
    maxWidth: '100%',
    color: theme.palette.text.primary,
  }));


  return (
    <div>
      <div className="admin-event-item" >
        {/* <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1, width:'100%'}}> */}
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={3} height={90} width="100%">
            <Grid item onClick={handleClick}>
              <ButtonBase sx={{ width: 70, height: 1 }}>
                {info.category_id == 1 && (
                  <Avatar
                    className="avatar"
                    sx={{ width: 80, height: 80,}}
                    src={icon_cleanup}
                  />
                )}

                {info.category_id == 2 && (
                  <Avatar
                    className="avatar"
                    sx={{ width: 80, height: 80 }}
                    src={icon_community_meeting}
                  />
                )}

                {info.category_id == 3 && (
                  <Avatar
                    className="avatar"
                    sx={{ width: 80, height: 80 }}
                    src={icon_donations}
                  />
                )}

                {info.category_id == 4 && (
                  <Avatar
                    className="avatar"
                    sx={{ width: 80, height: 80 }}
                    src={icon_drives}
                  />
                )}

                {info.category_id == 5 && (
                  <Avatar
                    className="avatar"
                    sx={{ width: 80, height: 80 }}
                    src={icon_education}
                  />
                )}

                {info.category_id == 6 && (
                  <Avatar
                    className="avatar"
                    sx={{ width: 80, height: 80 }}
                    src={icon_events}
                  />
                )}

                {info.category_id == 7 && (
                  <Avatar
                    className="avatar"
                    sx={{ width: 80, height: 80 }}
                    src={icon_popups}
                  />
                )}

                {info.category_id == 8 && (
                  <Avatar
                    className="avatar"
                    sx={{ width: 80, height: 80 }}
                    src={icon_other}
                  />
                )}
              </ButtonBase>
            </Grid>
            <Grid item xs={9}>
              <Typography
              onClick={handleClick}
                sx={{ width: '100%', height: 30 }}
                className="event-list-date"
                variant="h5"
                noWrap
              >
                {info.dayname}, {info.month} {info.day}
              </Typography>

              <Divider />

              <Typography onClick={handleClick} className="event-list-name" noWrap>
                <b>{info.name}</b>

  

              </Typography>
  
            </Grid>
            <Button
                  onClick={handleFaveEventClick}
                  className="edit-button"
                  size="small"
                  variant="contained"
                  sx={{height: '90%', float: 'right', top: 25, left: 35, background: '#33333394', boxShadow:'none' ,color: '#fff', borderRadiusRight: '10px', border:'0.5px solid white', 
                  boxShadow:'1px 1px 10px 2px black', zIndex: '10000'}}
                >
                  <StarIcon 
            
                  sx={{fontSize:'50px',}}

                  />
                </Button>
          </Grid>
          
        </StyledPaper>
      </div>


    </div>
  );
}

export default UserProfileItem;
