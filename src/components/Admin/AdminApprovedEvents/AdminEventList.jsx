// List of Approved Events

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AdminEventDetails from "./AdminEventDetails";

export default function AdminEventList() {

    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);

    const dispatch = useDispatch();

    // useEffect
    useEffect(() => {
        // dispatch ({ type: 'FETCH_EVENT_ADMIN' });
        dispatch ({ type: 'FETCH_APPROVED_EVENTS' });
        
        
    },[]);


    console.log('approved events', fetchApprovedEvents);
    return (
        <div>
            <h1>TEHEE</h1>


            {fetchApprovedEvents?.map((event, i) => {
                return (
                    <div key={i}>
                        Event Details
                    <AdminEventDetails
                    event={event}
                    />
                    </div>
                )
            })}

        </div>
    )

}; 