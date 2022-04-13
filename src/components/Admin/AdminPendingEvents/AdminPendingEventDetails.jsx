import { Helmet } from 'react-helmet';
import { useSelector } from "react-redux";

import "./AdminPendingEventDetails.scss";

export default function AdminPendingEventDetails() {

    const fetchEventId = useSelector(store => store.fetchEventId)


    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>

            <div className='admin-pending-event-detail-container'>
            {fetchEventId.map((detail,i) => {
                return (
                    <div id={i}>
                    <p>You Live In: </p>{detail.city}
                    </div>
                )
            })}
            </div>

        </div>
    )

}; // end of function