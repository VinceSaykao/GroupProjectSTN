import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


import { Helmet } from 'react-helmet';

import AdminPendingEventListItem from "./AdminPendingEventListItem";


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


            {fetchPendingEvents.map((event,i) => {

                return (
                    <div id={i}>

                <AdminPendingEventListItem 
                event={event}
                />

                </div>
                )
            })}
            

        </div>
    )

}; // end of AdminPendingEventList