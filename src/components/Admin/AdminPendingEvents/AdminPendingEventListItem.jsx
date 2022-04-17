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
                            <Avatar
                                sx={{ width: 80, height: 80 }}
                                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" />
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
                        <Typography noWrap>{event.city}</Typography>

                    </Grid>

                    {/* <ArrowForwardIosIcon
                        className='admin-arrow'
                        fontSize='large'
                    /> */}

                </Grid>
            </StyledPaper>

        </Box>








    </div>
    )

}; // end of function
