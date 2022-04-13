// List of Approved Events

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom'

import AdminEventDetails from "./AdminEventDetails";

import './AdminEventList.scss';


export default function AdminEventList() {

    // store that grabs approved events, although fetchApprovedEvents brings in more data...??
    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);
    const user = useSelector(store => store.user);

    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect to grab the approved events
    useEffect(() => {
        dispatch({ type: 'FETCH_APPROVED_EVENTS' });
        dispatch({ type: 'FETCH_EVENT_DETAILS', payload: user.id })


    }, []);

    // when user clicks on event, it will push to event details
    const handleClick = () => {
        history.push('/admin-approved-event-details')
    }; // end of handleClick

    return (
        <div>

            <div className="approved-event-list">
                {fetchApprovedEvents?.map((event, i) => {
                    return (
                        <div key={i}>

                            <span onClick={handleClick}>Event Details
                            {/* <AdminEventDetails
                                event={event}
                            /> */}
                            </span> 
                        </div>
                    )
                })}
            </div>

        </div>
    )

}; 