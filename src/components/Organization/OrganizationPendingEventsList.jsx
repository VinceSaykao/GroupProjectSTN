import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// ----material ui imports----
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { Divider } from '@mui/material';

import OrganizationPendingEventsListItem from './OrganizationPendingEventsListItem';




import { Helmet } from 'react-helmet';




export default function OrganizationPendingEventList() {

    const dispatch = useDispatch();

    // useEffect to grab the pending events
    useEffect(() => {
        // dispatch({ type: 'FETCH_PENDING_EVENT_ADMIN' }); // grab pending org events
    }, []);

    //store that grabs events that are ONLY pending
    const fetchPendingEvents = useSelector(store => store.fetchPendingEvents);
    const org = useSelector((store) => store.fetchOrganization);


    // const pendingOrgEvents = pendingEvents.filter(
    //     (pendingEvents) => pendingEvents.org_id === org.id // uh oh, big flaw with using user.org_id
    //   );

    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>
    





                

            <div className="pending-event-list-container">
                {fetchPendingEvents.map((event, i) => {

                    return (
                        <div id={i}>

                            <OrganizationPendingEventsListItem
                                event={event}
                            />

                        </div>
                    )
                })}
            </div>


        </div>
    )

}; // end of AdminPendingEventList