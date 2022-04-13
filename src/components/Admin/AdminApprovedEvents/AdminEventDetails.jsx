// Event Details

import { useSelector } from "react-redux";
import "./AdminEventDetails.scss";

import { Helmet } from 'react-helmet';

export default function AdminEventDetails() {

    const fetchEventId = useSelector(store => store.fetchEventId)

    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>
            <h1
            className="event-approved-details-header"
            >Event Details</h1>

            <div className="event-approved-list-container">
            {fetchEventId.map((detail, i) => {
                return (
                    <div id={i}>
                        <p>You Live In: </p>{detail.city}
                    </div>
                )
            })}
            </div>

        </div>
    )
}