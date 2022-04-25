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
        dispatch({ 
            type: 'UPDATE_EVENT_STATUS_DENY', 
            payload: {
                id: fetchEventId[0].id,
                feedback: rejectReason
            }
        })
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

            <Box sx={{textAlign:'center', }}>
            <Button sx={{background:'color'}} onClick={handleApprove} variant="contained" startIcon={<CheckCircleOutlineIcon fontSize='large' sx={{ textAlign: 'center', alignItems: 'center', margin: '0 auto', textAlign:'center', }} />}>
                Approve
            </Button>

            <Button  sx={{background:'color'}}  onClick={handleDenyModalOpen} variant="contained" startIcon={<CloseIcon fontSize='large' sx={{ textAlign: 'center', alignItems: 'center', margin: '0 auto',textAlign:'center', }} />}>
                Deny
            </Button>
            </Box>



            <div className='admin-pending-event-detail-container'>
                {fetchEventId.map((detail, i) => {
                    return (
                        <div id={i}>






                            <Grid sx={{ width: '100%', background: '#4444', textAlign: 'center' }} >
                                <StyledItem><u>{detail.dayname}, {detail.month} {detail.day} - {detail.enddayname}, {detail.endmonth} {detail.endday}</u></StyledItem>
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