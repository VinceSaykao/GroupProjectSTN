// List of Approved Events

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet';

// ----material ui imports----
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import {Divider} from '@mui/material';



import AdminEventListItem from "./AdminEventListItem";

import './AdminEventList.scss';


export default function AdminEventList() {

    // store that grabs approved events, although fetchApprovedEvents brings in more data...??
    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);


    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect to grab the approved events
    useEffect(() => {
        dispatch({ type: 'FETCH_APPROVED_EVENTS' });
    }, []);



    return (
        <div>

            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            
            }`}

                </style>
            </Helmet>

            <h1
                className="admin-event-header"
            >Admin Approved Events</h1>
            <div>

                <div className="admin-search-div">
                <InputBase
                    sx={{ ml: 5, flex: 1, bgcolor: 'white', }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton>
                    <SearchIcon />
                </IconButton>
                </div>

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </div>

            <div className="approved-event-list">
                {fetchApprovedEvents?.map((event, i) => {
                    return (
                        <div key={i}>

                        
                                <AdminEventListItem
                                event={event}
                            />
                        
                        </div>
                    )
                })}
            </div>

        </div>
    )

}; 