import AdminEventListItem from "../Admin/AdminApprovedEvents/AdminEventListItem";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

// import './AdminEventList.scss';


export default function OrganizationEventsList() {

    // store that grabs approved events, although fetchApprovedEvents brings in more data...??
    const approvedEvents = useSelector(store => store.fetchApprovedEvents);
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect to grab the approved events
    useEffect(() => {
        dispatch({ type: 'FETCH_APPROVED_EVENTS' });
    }, []);

    const orgEvents = approvedEvents.filter(approvedEvents => approvedEvents.org_id === user.org_id)

    return (
        <div className="admin-event-view">

            <div className="approved-event-list">
                {orgEvents?.map((event, i) => {
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