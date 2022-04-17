import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// ----material ui imports----
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { Divider } from '@mui/material';




import { Helmet } from 'react-helmet';

import AdminPendingEventListItem from "./AdminPendingEventListItem";
import './AdminPendingEventList.scss';


export default function AdminPendingEventList() {

    const dispatch = useDispatch();

    // useEffect to grab the pending events
    useEffect(() => {
        dispatch({ type: 'FETCH_PENDING_EVENT_ADMIN' });
    }, []);

    //store that grabs events that are ONLY pending
    const fetchPendingEvents = useSelector(store => store.fetchPendingEvents);


    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>
            <h1
                className="admin-event-header"
            >Admin Pending Events</h1>
            <div>

                <div className="admin-search-div">
                    <InputBase
                        sx={{ ml: 5, flex: 1, bgcolor: 'white', }}
                        placeholder="| Search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </div>

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            </div>







                

            <div className="pending-event-list-container">
                {fetchPendingEvents.map((event, i) => {

                    return (
                        <div id={i}>

                            <AdminPendingEventListItem
                                event={event}
                            />

                        </div>
                    )
                })}
            </div>


        </div>
    )

}; // end of AdminPendingEventList