import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

    return (

        <div
            className='admin-event-item'
            onClick={handleClick}>

            <Paper
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
                        <ButtonBase sx={{ width: 60, height: 1 }}>
                            <Avatar 
                            sx={{ width: 56, height: 56 }}
                            alt="Remy Sharp" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={9.5} sm container>
                        <Grid item xs container direction="column" spacing={5}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {event.city}
                                    {event.date}
                                </Typography>
                            
                            </Grid>
                        
                        </Grid>
                        <Grid >
                            <Typography 
                            align='justify'
                            variant="subtitle1" component="div">
                            <ArrowForwardIosIcon 
                            fontSize='large'
                            />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>






        </div>

    )
}; // end of AdminEventListItem