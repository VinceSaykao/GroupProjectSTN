import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';

import "./AdminPendingEventDetails.scss";

//MUI
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function AdminPendingEventDetails() {

    const dispatch = useDispatch();

    const [status, setStatus] = useState('approved')

    // store that has the specific event I want by id
    const fetchEventId = useSelector(store => store.fetchEventId);
    const user = useSelector(store => store.user);

    // when approve button is pressed, it will change event status to approved
    const handleApprove = () => {
        console.log('approved')

        dispatch ({ type: 'UPDATE_EVENT', payload: {id: user.id, status: status} });

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

            <Button onClick={handleApprove} variant="contained" startIcon={<CheckCircleOutlineIcon fontSize='large'/>}>
                Approve
            </Button>

            <Button onClick={handleDeny} variant="contained" startIcon={<CloseIcon fontSize='large'/>}>
                Deny
            </Button>

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