import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet';

// ----material ui imports----
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Divider, Grid } from '@mui/material';

import UserCalanderItem from './UserCalanderItem';
import './UserCalendarView.scss';


function UserCalanderView() {
    // store that grabs approved events, although fetchApprovedEvents brings in more data...??
    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);


    const dispatch = useDispatch();
    const history = useHistory();

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

    // Search Function ------------------------------------
    const handleSearch = (event) => {
        event.preventDefault();
        // if user enters search
        if (event.target.value.length > 0) {
            dispatch({ type: 'FETCH_APPROVED_SEARCH', payload: { search: event.target.value } })
        }
        // if search is left blank
        else {
            dispatch({ type: 'FETCH_APPROVED_EVENTS' })
        }
    }

    return (
        <div className="calendar-view">

            <Helmet>
                <style>
                    {`body,html { background-color: #090909ee;);}`}
                </style>
            </Helmet>

            <Grid sx={{height: '80px', top: '10px'}}>
            <Box className="home-search-div" sx={{ mt: 4, top: 23, backdropFilter: 'blur:50px', width: '100%', bgcolor: '#00000078'}}>
                <InputBase
                    className="home-search-search"
                    sx={{ ml: 5, flex: 1, color: 'white', height: '90px', lineHeight: '50px', fontSize: '40px'}}
                    placeholder="Search"
                    // inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={event => handleSearch(event)}
                />
                <IconButton>
                    <SearchIcon 
                    fontSize="large"
                    sx={{color: 'white'}}
                    />
                </IconButton>
            </Box>
            </Grid>
   


            {/* 
            <h1>Calander Goes Here =-) (hopefully)</h1>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> 
            */}

            <StyledBox
            // sx={{
            //     bottom: '0',
            // }}
            >
                <div className="home-approved-event-list" >
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