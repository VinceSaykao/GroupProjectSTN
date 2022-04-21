import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Calendar from 'react-calendar'

// ----material ui imports----
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import {Divider} from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'

import UserCalanderItem from './UserCalanderItem';

import './UserCalendarView.scss';


function UserCalanderView(){
    // store that grabs approved events, although fetchApprovedEvents brings in more data...??
    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);


    const dispatch = useDispatch();
    const history = useHistory();


    const [calendarValue, setCalendarValue] = useState(new Date());

    // useEffect to grab the approved events
    useEffect(() => {
        dispatch({ type: 'FETCH_APPROVED_EVENTS' });
    }, []);


    const StyledBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        position: 'absolute',
        minWidth: '100%',
        maxWidth: '100%',
        color: theme.palette.text.primary,
    }));


    const onClickDay = (value, event)=>{

        dispatch({type:"FETCH_SAVED_EVENTS", payload: calendarValue})
    }



return (
    <div className="calendar-view">

    <Helmet>
        <style>{`body,html { background-color: #090909ee; overflow: hidden;); 
    
    }`}

        </style>
    </Helmet>

    <div className="react-calendar">
      <header>
        {/* <Typography variant="h2">Hello World.</Typography> */}
        <br />
        <Calendar onChange={setCalendarValue} value={calendarValue} onClickDay={onClickDay} />
        <br />
        <Typography variant="h5">{calendarValue.toString()}</Typography>
      </header>
    </div>
    <div>


        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </div>


    <StyledBox
    sx={{
        bottom: '0',
    }}
    >
    <div className="home-approved-event-list">
        {fetchApprovedEvents?.map((event, i) => {
            return (
                <div key={i}>
                <UserCalanderItem event={event} />
                </div>
            )
        })}
    </div>
    </StyledBox>

</div>
)
}

export default UserCalanderView;