// Event Details

import { useSelector } from "react-redux";

export default function AdminEventDetails() {

    const fetchEventId = useSelector(store => store.fetchEventId)

    return (
        <div>
            <h1>YEE</h1>

            {fetchEventId.map((detail,i) => {
                return (
                    <div id={i}>
                    <p>You Live In: </p>{detail.city}
                    </div>
                )
            })}
        
        </div>
    )
}