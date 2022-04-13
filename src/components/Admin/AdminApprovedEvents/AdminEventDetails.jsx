// Event Details

import { useSelector } from "react-redux"

export default function AdminEventDetails() {

    const fetchEventId = useSelector(store => store.fetchEventId)

    console.log('event details: ', fetchEventId);
    return (
        <div>
            <h1>YEE</h1>
        
        </div>
    )
}