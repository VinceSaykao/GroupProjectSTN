import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import { format } from 'date-fns'

import "./AdminPendingEventDetails.scss";

//MUI
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function AdminPendingEventDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [status, setStatus] = useState('approved');
    const [expired, setExpired] = useState('expired');


    // store that has the specific event I want by id
    const fetchEventId = useSelector(store => store.fetchEventId);

    // when approve button is pressed, it will change event status to approved
    const handleApprove = () => {

        const dateNow = format(new Date(), 'yyyy/MM/dd')


        // destructures the array of object
        const event = fetchEventId[0];

        console.log(event.end_date);
        console.log(dateNow);
    

            if (event.end_date < dateNow) {

                dispatch({
                    type: 'UPDATE_EVENT',
                    payload:
                    {
                        id: event.id,
                        org_id: event.org_id,
                        category_id: event.category_id,
                        status: expired,
                        name: event.name,
                        description: event.description,
                        date: event.date,
                        start_time: event.start_time,
                        end_time: event.end_time,
                        image: event.image,
                        address1: event.address1,
                        address2: event.address2,
                        city: event.city,
                        zip: event.zip,
                        state: event.state,
                        feedback: event.feedback,
                    }
                });
            } else {
                console.log('not expired yet');
            }


        // dispatch ({ type: 'UPDATE_EVENT', 
        // payload: 
        // {
        //     id: event.id, 
        //     org_id: event.org_id, 
        //     category_id: event.category_id, 
        //     status: status,
        //     name: event.name,
        //     description: event.description,
        //     date: event.date,
        //     start_time: event.start_time,
        //     end_time: event.end_time,
        //     image: event.image,
        //     address1: event.address1,
        //     address2: event.address2,
        //     city: event.city,
        //     zip: event.zip,
        //     state: event.state,
        //     feedback: event.feedback,
        // } });

        // history.push('./admin-pending-list');

    }; // end of handleApprove

    // when deny button is pressed, it will allow for admin feedback
    const handleDeny = () => {
        console.log('denied')
    }; // end of handleDeny


    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>

            <h1>Event Details</h1>

            <Button onClick={handleApprove} variant="contained" startIcon={<CheckCircleOutlineIcon fontSize='large' />}>
                Approve
            </Button>

            <Button onClick={handleDeny} variant="contained" startIcon={<CloseIcon fontSize='large' />}>
                Deny
            </Button>

            <div className='admin-pending-event-detail-container'>
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

}; // end of function