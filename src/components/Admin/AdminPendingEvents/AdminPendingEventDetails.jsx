import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';





import { format } from 'date-fns';

import "./AdminPendingEventDetails.scss";

//MUI
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { ConstructionOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import { Divider } from '@mui/material';

export default function AdminPendingEventDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [status, setStatus] = useState('approved');
    const [expired, setExpired] = useState('expired');

    // const event = fetchEventId[0];
    // console.log(fetchEventId);

    // store that has the specific event I want by id
    const fetchEventId = useSelector(store => store.fetchEventId);
    //     const exp = useSelector(store => store.fetchEventId[0]);

    // // console.log(exp)


    // useEffect(() => {
    //     handleExpired()
    // }, [])








    // const handleExpired = () => {

    //     const dateNow = format(new Date(), 'yyyy/MM/dd')

    //     const exp = fetchEventId[0];

    // console.log('this is fetch', fetchEventId);


    // console.log(exp.end_date);
    // console.log(dateNow);


    // if (exp.end_date < dateNow) {
    //     console.log('expired')

    //     // dispatch({
    //     //     type: 'UPDATE_EVENT',
    //     //     payload:
    //     //     {
    //     //         id: exp.id,
    //     //         org_id: exp.org_id,
    //     //         category_id: exp.category_id,
    //     //         status: expired,
    //     //         name: exp.name,
    //     //         description: exp.description,
    //     //         date: exp.date,
    //     //         link: exp.link,
    //     //         start_date: exp.start_date,
    //     //         end_date: exp.end_date,
    //     //         start_time: exp.start_time,
    //     //         end_time: exp.end_time,
    //     //         image: exp.image,
    //     //         email: exp.email,
    //     //         phone: exp.phone,
    //     //         address1: exp.address1,
    //     //         address2: exp.address2,
    //     //         city: exp.city,
    //     //         zip: exp.zip,
    //     //         state: exp.state,
    //     //         feedback: exp.feedback,
    //     //     }
    //     // });
    // } else {
    //     console.log('not expired');
    // }


    // }; // end of handleExpired







    // Update status     
    // useEffect(() => {
    //     updateExpired()
    // }, []);

    // function updateExpired() {
    //     const event = fetchEventId[0];
    //     if (event.end_date > Date()) {
    //         dispatch({
    //             type: 'UPDATE_EVENT',
    //             payload:
    //             {
    //                 id: event.id,
    //                 org_id: event.org_id,
    //                 category_id: event.category_id,
    //                 status: expired,
    //                 name: event.name,
    //                 description: event.description,
    //                 date: event.date,
    //                 start_time: event.start_time,
    //                 end_time: event.end_time,
    //                 image: event.image,
    //                 address1: event.address1,
    //                 address2: event.address2,
    //                 city: event.city,
    //                 zip: event.zip,
    //                 state: event.state,
    //                 feedback: event.feedback,
    //             }
    //         });

    //     }
    // }


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
                email: event.email,
                link: event.ink,
                phone: event.phone,
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
        alert('denied')
        history.push('./adminlist');
        
    }; // end of handleDeny


    const Item = styled('div')(({ theme }) => ({
        color: 'white',
        backgroundColor: '#88888844',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    }));



    const StyledItem = styled('div')(({ theme }) => ({
        color: 'white',
        fontSize: '30px',
        backgroundColor: '#88888844',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    }));

    const user = useSelector(store => store.user);




    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>


            <Button onClick={handleApprove} variant="contained" startIcon={<CheckCircleOutlineIcon fontSize='large' sx={{textAlign:'center',  alignItems:'center', margin:'0 auto'}} />}>
                Approve
            </Button>

            <Button onClick={handleDeny} variant="contained" startIcon={<CloseIcon fontSize='large' sx={{textAlign:'center', alignItems:'center', margin:'0 auto'}} />}>
                Deny
            </Button>



            <div className='admin-pending-event-detail-container'>
                {fetchEventId.map((detail, i) => {
                    return (
                        <div id={i}>

                        




                                    <Grid sx={{ width: '100%', background: '#4444', textAlign: 'center' }} >
                                        <StyledItem><u>{detail.dayname} {detail.month} {detail.day}</u></StyledItem>
                                        <StyledItem>
                                            <u><b>Details</b></u>
                                            <br></br>
                                            {/* <Divider sx={{ height: 15, m: 0.5 }} orientation="vertical"/> */}
                                            {detail.description}
                                            <br></br>



                                        </StyledItem>




                                        <StyledItem>
                                            <u><b>Contact</b></u>
                                            <br></br>
                                            {detail.email}
                                            <br></br>
                                            {detail.phone}

                                        </StyledItem>

                                        <StyledItem>
                                            <u><b>Location</b></u>
                                            <br></br>
                                            {detail.address1}

                                        </StyledItem>
                                    </Grid>


        
                        </div>
                    )
                })}
            </div>

        </div>
    )

}; // end of function