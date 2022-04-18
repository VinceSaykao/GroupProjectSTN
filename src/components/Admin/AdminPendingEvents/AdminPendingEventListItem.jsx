import './AdminPendingEventListItem.scss';

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Divider from '@mui/material/Divider';

import Avatar from '@mui/material/Avatar';


import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';


// Icons
import icon_cleanup from '../../../category_icons/icon_cleanup.png'
import icon_community_meeting from '../../../category_icons/icon_community_meeting.png'
import icon_donations from '../../../category_icons/icon_donations.png'
import icon_drives from '../../../category_icons/icon_drives.png'
import icon_education from '../../../category_icons/icon_education.png'
import icon_events from '../../../category_icons/icon_events.png'
import icon_popups from '../../../category_icons/icon_popups.png'
import icon_other from '../../../category_icons/icon_other.png'




export default function AdminPendingEventListItem({ event }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
    }));





    const handleClick = () => {
        // will dispatch the event id that grabs that specific event 
        dispatch({ type: 'FETCH_EVENT_DETAILS', payload: event.id })

        // push to this url
        history.push('/admin-pending-event-details');

    }; // end of handleClick


    console.log(event);

    return (
        <div
        className='admin-event-item'
        onClick={handleClick}>

        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1, width:'100%'}}>
            <StyledPaper
                sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                }}
            >
                <Grid container wrap="nowrap" spacing={3} height={90} width="100%">
                    <Grid item>
                        <ButtonBase sx={{ width: 70, height: 1 }}>
                            {event.category_id == 1 &&
                                <Avatar
                                    className='avatar'
                                    sx={{ width: 80, height: 80 }}
                                    src={icon_cleanup}
                                />}


                            {event.category_id == 2 &&
                                <Avatar
                                    className='avatar'
                                    sx={{ width: 80, height: 80 }}
                                    src={icon_community_meeting}
                                />}

                            {event.category_id == 3 &&
                                <Avatar
                                    className='avatar'
                                    sx={{ width: 80, height: 80 }}
                                    src={icon_donations}
                                />}

                            {event.category_id == 4 &&
                                <Avatar
                                    className='avatar'
                                    sx={{ width: 80, height: 80 }}
                                    src={icon_drives}
                                />}

                            {event.category_id == 5 &&
                                <Avatar
                                    className='avatar'
                                    sx={{ width: 80, height: 80 }}
                                    src={icon_education}
                                />}

                            {event.category_id == 6 &&
                                <Avatar
                                    className='avatar'
                                    sx={{ width: 80, height: 80 }}
                                    src={icon_events}
                                />}

                            {event.category_id == 7 &&
                                <Avatar
                                    className='avatar'
                                    sx={{ width: 80, height: 80 }}
                                    src={icon_popups}
                                />}

                            {event.category_id == 8 &&
                                <Avatar
                                    className='avatar'
                                    sx={{ width: 80, height: 80 }}
                                    src={icon_other}
                                />}


                        </ButtonBase>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography
                            sx={{ width: '100%', height: 30 }}
                            className='event-list-date'
                            variant='h5'
                            noWrap>{event.dayname}, {event.month} {event.day}</Typography>

                        <Divider />
                        
                        <Typography className='event-list-name' noWrap><b>{event.name}</b></Typography>
                        <Typography className='event-list-name' noWrap>{event.orgname} </Typography>

                    </Grid>



                </Grid>
            </StyledPaper>
            {/* <Typography className='event-list-name' noWrap><b>{event.name}</b><ArrowForwardIosIcon className='event-arrow'/> </Typography> */}
            {/* <Typography className='event-list-orgname' noWrap>{event.orgname}  <ArrowForwardIosIcon className='event-arrow'/> </Typography> */}
                                    {/* <ArrowForwardIosIcon className='event-arrow'/> */}

        </Box>






    </div>
    )

}; // end of function
