import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet';

const fetchPendingEvents = useSelector(store => store.fetchPendingEvents);

export default function AdminPendingEventList() {



    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>

            {fetchPendingEvents.map((event,i) => {
                <AdminPendingEventListItem 
                event={event}
                />
            })}
            

        </div>
    )

}; // end of AdminPendingEventList