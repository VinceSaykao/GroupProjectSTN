import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import { format } from 'date-fns'

import "./AdminPendingEventDetails.scss";

//MUI
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { ConstructionOutlined } from '@mui/icons-material';

export default function AdminPendingEventDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [status, setStatus] = useState('approved');
    const [expired, setExpired] = useState('expired');


    // store that has the specific event I want by id
    const fetchEventId = useSelector(store => store.fetchEventId);
    const exp = useSelector(store => store.fetchEventId[0]);

// console.log(exp)


useEffect(() => {
    handleExpired()
}, [])








    const handleExpired = () => {

        const dateNow = format(new Date(), 'yyyy/MM/dd')

        const exp = fetchEventId[0];

        // console.log('this is fetch', fetchEventId);


        // console.log(exp.end_date);
        // console.log(dateNow);


        if (exp.end_date < dateNow) {
            console.log('expired')

            // dispatch({
            //     type: 'UPDATE_EVENT',
            //     payload:
            //     {
            //         id: exp.id,
            //         org_id: exp.org_id,
            //         category_id: exp.category_id,
            //         status: expired,
            //         name: exp.name,
            //         description: exp.description,
            //         date: exp.date,
            //         link: exp.link,
            //         start_date: exp.start_date,
            //         end_date: exp.end_date,
            //         start_time: exp.start_time,
            //         end_time: exp.end_time,
            //         image: exp.image,
            //         email: exp.email,
            //         phone: exp.phone,
            //         address1: exp.address1,
            //         address2: exp.address2,
            //         city: exp.city,
            //         zip: exp.zip,
            //         state: exp.state,
            //         feedback: exp.feedback,
            //     }
            // });
        } else {
            console.log('not expired');
        }


    }; // end of handleExpired







    // when approve button is pressed, it will change event status to approved
    const handleApprove = () => {

        // destructures the array of object
        const event = fetchEventId[0];

        dispatch({
            type: 'UPDATE_EVENT',
            payload:
            {
                id: event.id,
                org_id: event.org_id,
                category_id: event.category_id,
                status: status,
                name: event.name,
                description: event.description,
                start_date: event.start_date,
                end_date: event.end_date,
                start_time: event.start_time,
                end_time: event.end_time,
                image: event.image,
                address1: event.address1,
                address2: event.address2,
                email: email,
                link: link, 
                phone: phone,
                city: event.city,
                zip: event.zip,
                state: event.state,
                feedback: event.feedback,
            }
        });

        history.push('./adminlist');

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