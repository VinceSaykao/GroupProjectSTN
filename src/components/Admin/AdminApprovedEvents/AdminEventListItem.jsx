import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import './AdminEventListItem.scss';

export default function AdminEventListItem({ event }) {


    const dispatch = useDispatch();
    const history = useHistory();

        // when user clicks on event, it will push to event details
        const handleClick = () => {

            // will dispatch the event id that grabs that specific event 
            dispatch({ type: 'FETCH_EVENT_DETAILS', payload: event.id })

            // push to this url
            history.push('/admin-approved-event-details')
        }; // end of handleClick

    return (

        <div 
        className='admin-event-item'
        onClick={handleClick}>

            <p>
                {event.name}
                {event.city}
                {event.date}
                {event.zip}
            </p>

        </div>

    )
}; // end of AdminEventListItem