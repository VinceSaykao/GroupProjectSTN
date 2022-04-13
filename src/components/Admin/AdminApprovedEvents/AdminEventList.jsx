// List of Approved Events

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet';

import AdminEventListItem from "./AdminEventListItem";

import './AdminEventList.scss';


export default function AdminEventList() {

    // store that grabs approved events, although fetchApprovedEvents brings in more data...??
    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);


    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect to grab the approved events
    useEffect(() => {
        dispatch({ type: 'FETCH_APPROVED_EVENTS' });
    }, []);



    return (
        <div>

            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            
            }`}

                </style>
            </Helmet>

            <div className="approved-event-list">
                {fetchApprovedEvents?.map((event, i) => {
                    return (
                        <div key={i}>

                            <span><u>Event</u>
                                <AdminEventListItem
                                event={event}
                            />
                            </span>
                        </div>
                    )
                })}
            </div>

        </div>
    )

}; 