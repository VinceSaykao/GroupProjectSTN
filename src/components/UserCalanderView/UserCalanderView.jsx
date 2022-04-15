import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet';

// ----material ui imports----
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import {Divider} from '@mui/material';

import UserCalanderItem from './UserCalanderItem';


function UserCalanderView(){
    // store that grabs approved events, although fetchApprovedEvents brings in more data...??
    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);


    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect to grab the approved events
    useEffect(() => {
        dispatch({ type: 'FETCH_APPROVED_EVENTS' });
    }, []);





console.log('fetchAppEvent', fetchApprovedEvents);
return (
    <div>

    <Helmet>
        <style>{`body { background-color: #090909ee;); 
    
    }`}

        </style>
    </Helmet>

    <h1>Calander Goes Here =-) (hopefully)</h1>
    <div>


        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </div>

    <div className="approved-event-list">
        {fetchApprovedEvents?.map((event, i) => {
            return (
                <div key={i}>
                <UserCalanderItem event={event} />
                </div>
            )
        })}
    </div>

</div>
)
}

export default UserCalanderView;