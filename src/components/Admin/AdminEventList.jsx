// List of Approved Events

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AdminEventList() {

    const fetchAdminEvents = useSelector(store => store.fetchAdminEvents)

    // useEffect
    useEffect(() => {
    },[]);



    return (
        <div>

            {fetchAdminEvents.map((event,i) => {
                return (
                    <div key={i}>
                    <fetchEventDetails 
                    event={event}
                    />
                    </div>
                )
            })}

        </div>
    )

}; 