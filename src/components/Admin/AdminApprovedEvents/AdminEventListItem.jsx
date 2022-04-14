import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import './AdminEventListItem.scss';

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



        {event.city}






{/* <Grid container spacing={10} sx={{ py: 3.25 }}
className="admin-grid-events"
>
                <Grid item xs={3}>
                    <div className="category-icon">
                    Icon
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ mb: 6 }}>
                <div className="pending-event-list-detail">
    
                    <span className='admin-event-date'>
                        {event.date}
                        </span>

                        <span className='admin-event-name'>
                
                        {event.name}
                        </span>
                        
                    </div>
                        </Typography>
            
                </Grid>
                <Grid item xs={3}>
                <div className="pending-arrow-icon">
                    <ArrowForwardIosIcon />
                    </div>
            
                </Grid>
            </Grid> */}
        

        </div>

    )
}; // end of AdminEventListItem