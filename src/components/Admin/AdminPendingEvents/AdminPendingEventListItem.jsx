import './AdminPendingEventListItem.scss';

import { useHistory } from "react-router-dom"


export default function AdminPendingEventListItem({event}) {

    const history = useHistory();

    const handleClick = () => {
        history.push('/admin-pending-event-details')
    }

    return (
        <div
        className="admin-pending-event"
        onClick={handleClick}
        >
            {event.name}
        </div>
    )

}; // end of function
