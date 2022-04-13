import './AdminPendingEventListItem.scss';

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


export default function AdminPendingEventListItem({ event }) {

    const history = useHistory();
    const dispatch = useDispatch();



    const handleClick = () => {
        // will dispatch the event id that grabs that specific event 
        dispatch({ type: 'FETCH_EVENT_DETAILS', payload: event.id })

        // push to this url
        history.push('/admin-pending-event-details');
        
    }; // end of handleClick

    return (
        <div
            className="admin-pending-event"
            onClick={handleClick}
        >
            {event.name}
        </div>
    )

}; // end of function
