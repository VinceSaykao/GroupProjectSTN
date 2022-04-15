import './AdminPendingEventListItem.scss';

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export default function AdminPendingEventListItem({ event }) {

    const history = useHistory();
    const dispatch = useDispatch();





    const handleClick = () => {
        // will dispatch the event id that grabs that specific event 
        dispatch({ type: 'FETCH_EVENT_DETAILS', payload: event.id })

        // push to this url
        history.push('/admin-pending-event-details');

    }; // end of handleClick

    return (
        <div
            className="admin-pending-event"
            onClick={handleClick}
        >

            <Grid container spacing={2} sx={{ py: 0.5 }}>
                <Grid item xs={3}>
                    <div className="category-icon">
                    Icon
                    </div>
                </Grid>
                <Grid item xs={6}>
                <div className="pending-event-list-detail">
                    <Typography sx={{ mb: 1 }}>
                        <b>

                        {event.date}<br></br>
                        <p>By Organization</p>
                        {event.name}

                        
                        </b></Typography>
                    </div>
            
                </Grid>
                <Grid item xs={3}>
                <div className="pending-arrow-icon">
                    <ArrowForwardIosIcon />
                    </div>
            
                </Grid>
            </Grid>
            <Box sx={{ my: 5 }}>
            </Box>







        </div>
    )

}; // end of function
