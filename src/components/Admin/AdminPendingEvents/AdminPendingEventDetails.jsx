import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { format } from 'date-fns';

import "./AdminPendingEventDetails.scss";

// MUI
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
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';



import Swal from 'sweetalert2';


// Modal Styling
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AdminPendingEventDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    // store that has the specific event I want by id
    const fetchEventId = useSelector(store => store.fetchEventId);

    // Modal State
    const [open, setOpen] = useState(false);
    const [rejectReason, setRejectReason] = useState('');
    const handleDenyModalOpen = () => setOpen(true);
    const handleDenyModalClose = () => setOpen(false);

    // when approve button is pressed, it will change event status to approved
    const handleApprove = () => {

        // destructures the array of object
        const event = fetchEventId[0];


        return Swal.fire({
            title: "Approved Event!",
            text: "Event Has Been Approved!",
            icon: "success",
            button: "Aww yiss!",
        }) &&

            dispatch({
                type: 'UPDATE_EVENT',
                payload:
                {
                    id: event.id,
                    org_id: event.org_id,
                    category_id: event.category_id,
                    status: 'approved',
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
            }) &&
            history.push('./adminlist');



    }; // end of handleApprove

    // when deny button is pressed, it will allow for admin feedback
    const handleDenySubmit = () => {


        return Swal.fire({
            title: "Feedback Submitted!",
            text: "You have Denied An Event!",
            icon: "success",
            button: "Aww yiss!",
        }) &&
        dispatch({
            type: 'UPDATE_EVENT_STATUS_DENY',
            payload: {
                id: fetchEventId[0].id,
                feedback: rejectReason
            }
        }) &&
        history.push('./adminlist')
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

    const handleExit = () => {
        history.goBack();
    }


    // Date for Event
    const ItemDateTime = styled('div')(({ theme }) => ({
        // color: '#ff3700',
        // position: 'absolute',
        top: '900',
        color: 'white',
        fontSize: '25px',
        margin: '0',
        padding: '0',
        textAlign: 'center',
        backgroundColor: 'transparent',
        // borderRadius: theme.shape.borderRadius,
    }));




    // Event Title!
    const ItemName = styled('div')(({ theme }) => ({
        fontSize: '35px',
        color: 'white',
        backgroundColor: 'transparent',
        borderBottom: '1px solid #fff',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    }));


    // Contact/Location Container
    const StyledContactItem = styled('div')(({ theme }) => ({
        textAlign: 'left',
        color: 'white',
        fontSize: '25px',
        backgroundColor: '#transparent',
        borderBottom: '1px solid white',
        borderTop: '1px solid white',
        padding: theme.spacing(2),
        // borderRadius: theme.shape.borderRadius,
    }));


    // details
    const StyledItemDetails = styled('div')(({ theme }) => ({
        marginTop: '-40px',
        width: '100%',
        textAlign: 'left',
        color: 'white',
        fontSize: '20px',
        backgroundColor: 'transparent',
        // border:'1px solid white',
        // borderRadius:'10px',
        padding: theme.spacing(2),
        // borderRadius: theme.shape.borderRadius,
    }));




    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>


            {/* ----------- MODAL RENDERING ------------------------------------------ */}

<Modal
    open={open}
    onClose={handleDenyModalClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Event Rejection Reason:
        </Typography>
        <Typography sx={{ fontSize: "0.85rem", mt: 1 }}>
            The organization will have the opportunity to update and resubmit the event.
        </Typography>
        <form onSubmit={handleDenySubmit} >
            <TextField
                id="modal-modal-description"
                sx={{ mt: 2 }}
                variant="outlined"
                fullWidth
                multiline
                required
                minRows={2}
                maxRows={5}
                onChange={event => setRejectReason(event.target.value)}
            >
            </TextField>

            <Grid container spacing={2} sx={{ mt: 2 }}>

                <Grid item xs={6} sm={6}>
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Submit
                    </Button>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Button
                        variant="contained"
                        fullWidth

                    >
                        Cancel
                    </Button>
                </Grid>

            </Grid>
        </form>
    </Box>
</Modal>

{/* ---------------------------------------------------------------------- */}

            <CloseIcon
                className='exit-icon'
                sx={{ fontSize: '50px', }}
                onClick={handleExit}
            />







            {fetchEventId.map((detail, i) => {
                return (
                    <ItemDateTime>

                        {detail.dayname}, {detail.month} {detail.day} - {detail.enddayname}, {detail.endmonth} {detail.endday}
                    </ItemDateTime>

                )

            })}







            <div className="event-approved-list-container">
                {fetchEventId.map((detail, i) => {
                    return (
                        <div id={i}>

                            <Box sx={{ flexGrow: 1, minHeight: '1300px', }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Paper
                                            sx={{
                                                height: 160,
                                            }}
                                        >
                                            <img
                                                src={detail.image} // Gonna be {detail.image}
                                                loading="lazy"
                                                height="180px"
                                                width="100%"
                                            />
                                        </Paper>




                                    </Grid>


                                    <Grid container spacing={2} sx={{ mt: 2 }}>

                                        <Grid item xs={6} sm={6}>
                                            <Button
                                                onClick={handleApprove}
                                                variant="contained"
                                                fullWidth
                                                type="submit"
                                                sx={{background:'green',}}
                                            >
                                                Approve
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Button
                                                onClick={handleDenyModalOpen}
                                                variant="contained"
                                                fullWidth
                                                sx={{background:'red',}}

                                            >
                                                Deny
                                            </Button>
                                        </Grid>

                                    </Grid>




                                    <Grid sx={{ width: '100%', marginTop: '43px', background: 'transparent', alignItems: 'center', }}>







                                        <Grid item xs={12}>

                                            <Item>







                                            </Item>
                                        </Grid>
                                    </Grid>





                                    {(detail.feedback && detail.status == 'denied') && // ---------------- Rejection Reason ------------------------------------
                                        <Box sx={{ my: 2, py: 1, px: 2, backgroundColor: 'red' }}>
                                            <Typography variant="h5">
                                                Rejection Reason:
                                            </Typography>
                                            <Typography>
                                                {detail.feedback}
                                            </Typography>
                                            <br />
                                            <Typography>
                                                You may either <b>delete</b> this event, or <b>edit</b> and resubmit to the moderation team
                                            </Typography>
                                        </Box>
                                    }









                                    <Grid sx={{ width: '100%', background: '#4444' }} >


                                        <ItemName
                                            sx={{ textAlign: 'center', width: '100%', }}
                                            className='detail-name'
                                        >

                                            <b>{detail.name}</b>




                                        </ItemName>


                                        {/* <StyledItemDate><u>{detail.dayname}, {detail.month} {detail.day}</u></StyledItemDate> */}
                                        {/* <StyleDetailItem >


                                            <u><b> 
                                            
                                            Details</b></u>
                                        </StyleDetailItem> */}



                                        <StyledItemDetails>





                                            <br></br>
                                            {/* <Divider sx={{ height: 15, m: 0.5 }} orientation="vertical"/> */}
                                            {detail.description}
                                            <br></br>



                                        </StyledItemDetails>




                                        <StyledContactItem>
                                            <b>
                                                <LocalPostOfficeOutlinedIcon
                                                    sx={{ fontSize: '25px', }}
                                                /> Contact</b>
                                            <br></br>
                                            {detail.email}
                                            <br></br>
                                            {detail.phone}

                                        </StyledContactItem>

                                        <StyledItem>
                                            <b><LocationOnOutlinedIcon
                                                sx={{ fontSize: '25px', }}
                                            /> Location </b>
                                            <br></br>
                                            {detail.address1}

                                        </StyledItem>
                                    </Grid>

                                    <Grid container justifyContent="center">
                                        <iframe
                                            width="100%"
                                            height="200"
                                            frameBorder={0}
                                            style={{ border: 0 }}
                                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDX4e7v69d8lQVeWvBOcs-Bt9mFS2VVogg&q=${detail.address1}${detail.address2}${detail.city}${detail.state}${detail.zip}`}
                                            allowFullScreen
                                        ></iframe>
                                    </Grid>


                                </Grid>
                            </Box>


                        </div>
                    )
                })}
            </div>


        </div>
    )

}; // end of function