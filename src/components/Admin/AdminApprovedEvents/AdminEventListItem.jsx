import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as React from 'react';
import { useEffect } from "react";


import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';

import Avatar from '@mui/material/Avatar';


import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './AdminEventListItem.scss';

// Icons
import icon_cleanup from '../../../category_icons/icon_cleanup.png'
import icon_community_meeting from '../../../category_icons/icon_community_meeting.png'
import icon_donations from '../../../category_icons/icon_donations.png'
import icon_drives from '../../../category_icons/icon_drives.png'
import icon_education from '../../../category_icons/icon_education.png'
import icon_events from '../../../category_icons/icon_events.png'
import icon_popups from '../../../category_icons/icon_popups.png'
import icon_other from '../../../category_icons/icon_other.png'



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});





export default function AdminEventListItem({ event }) {



    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);

    // useEffect to grab the approved events
    useEffect(() => {
        dispatch({ type: 'FETCH_APPROVED_EVENTS' });
    }, []);



    const dispatch = useDispatch();
    const history = useHistory();

    // when user clicks on event, it will push to event details
    const handleClick = () => {

        // will dispatch the event id that grabs that specific event 
        dispatch({ type: 'FETCH_EVENT_DETAILS', payload: event.id })

        // push to this url
        history.push('/admin-approved-event-details')
    }; // end of handleClick


    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
    }));





    return (

        <div
            className='admin-event-item'
            onClick={handleClick}>

            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1, }}>
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
                                {/* {fetchApprovedEvents.map((cat, i) => { */}


                                    <Avatar
                                        // key={i}
                                        className='avatar'
                                        sx={{ width: 80, height: 80 }}
                                        src={icon_donations}
                                        >

                                        {/* {cat.org_id == 1 && <img className="icon_dropdown" src={icon_cleanup} />}
                                        {cat.org_id == 2 && <img className="icon_dropdown" src={icon_community_meeting} />}
                                        {cat.org_id == 3 && <img className="icon_dropdown" src={icon_donations} />}
                                        {cat.org_id == 4 && <img className="icon_dropdown" src={icon_drives} />}
                                        {cat.org_id == 5 && <img className="icon_dropdown" src={icon_education} />}
                                        {cat.org_id == 6 && <img className="icon_dropdown" src={icon_events} />}
                                        {cat.id == 7 && <img className="icon_dropdown" src={icon_popups} />}
                                        {cat.id == 8 && <img className="icon_dropdown" src={icon_other} />} */}

                                    </Avatar>
                                    
                                {/* })} */}
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography
                                sx={{ width: '100%', height: 30 }}
                                className='event-list-date'
                                variant='h5'
                                noWrap>{event.dayname}, {event.month} {event.day}</Typography>

                            <Divider />

                            <Typography noWrap><b>{event.name}</b></Typography>
                            <Typography noWrap>{event.orgname}</Typography>

                        </Grid>

                        {/* <ArrowForwardIosIcon
                            className='admin-arrow'
                            fontSize='large'
                        /> */}

                    </Grid>
                </StyledPaper>

            </Box>

            {/* <Paper
                sx={{
                    p: 1,
                    margin: 1,
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={1}>
                    <Grid item>
                        <ButtonBase sx={{ width: 70, height: 1 }}>
                            <Avatar
                                sx={{ width: 80, height: 80 }}
                                alt="Remy Sharp" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={9.5} sm container>
                        <Grid item xs container direction="column" spacing={5}>
                            <Grid item xs >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {event.city}
                                    <br></br>
                                    {event.date}
                                    <br></br>
                                    {event.name}
                                </Typography>

                            </Grid>

                        </Grid>
                        <Grid >
                            <ButtonBase sx={{ width: 50, height: 1 }}
                                align='justify'
                                variant="subtitle1" component="div">
                                <ArrowForwardIosIcon
                                    fontSize='large'
                                />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper> */}






        </div>

    )
}; // end of AdminEventListItem