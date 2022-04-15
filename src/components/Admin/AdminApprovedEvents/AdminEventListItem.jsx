import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as React from 'react';

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


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});





export default function AdminEventListItem({ event }) {


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

            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2} height={90}>
                        <Grid item>
                            <ButtonBase sx={{ width: 70, height: 1 }}>
                                <Avatar
                                    sx={{ width: 80, height: 80 }}
                                    src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography

                                variant='h4'
                                noWrap>{event.month} {event.day}</Typography>
                            <Divider />

                            <Typography noWrap>{event.name}</Typography>
                            <Typography noWrap>By: {event.city}</Typography>

                        </Grid>

                        <ArrowForwardIosIcon
                            className='admin-arrow'
                            fontSize='large'
                        />

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