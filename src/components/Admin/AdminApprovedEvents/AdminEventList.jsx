// List of Approved Events

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import AdminEventDetails from "./AdminEventDetails";

export default function AdminEventList() {

    const fetchAdminEvents = useSelector(store => store.fetchAdminEvents)

    const dispatch = useDispatch();

    // useEffect
    useEffect(() => {
        dispatch ({ type: 'FETCH_EVENT_ADMIN' });
    },[]);



    return (
        <div>
            <h1>TEHEE</h1>


            {/* {fetchAdminEvents.map((event,i) => {
                return (
                    <div key={i}>
                        Event Details
                    <AdminEventDetails
                    event={event}
                    />
                    </div>
                )
            })} */}

        </div>
    )

}; 