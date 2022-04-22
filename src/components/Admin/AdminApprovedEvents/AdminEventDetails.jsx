// Event Details
import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';

import './AdminEventDetails.scss'


//modal
import Modal from '@mui/material/Modal';


import { useSelector, useDispatch } from "react-redux";
import "./AdminEventDetails.scss";
import { useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet';

export default function AdminEventDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: "FETCH_SAVE_EVENT" });
        dispatch({ type: "SET_PROFILE_SAGA" });
    }, [])

    const fetchEventId = useSelector(store => store.fetchEventId);
    const fetchProfile = useSelector(store => store.fetchProfile[0]);
    const user = useSelector(store => store.user);






    // Styles the items mui
    // const Item = styled(Paper)(({ theme }) => ({
    //     color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

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

    const handleSave = () => {
        dispatch({ type: "ADD_SAVE_EVENT", payload: { user_id: fetchProfile?.id, event_id: fetchEventId[0]?.id } })
    }

    const handleEdit = () => {
        history.push(`/admin-event-edit/${fetchEventId[0]?.id}`)
    }

    const handleCopy = () => {
        history.push(`/admin-event-copy/${fetchEventId[0]?.id}`)
    }

    const handleDelete = () => {
        dispatch({ type: 'DELETE_EVENT', payload: fetchEventId[0]?.id })
        history.push("/adminlist");

    }

    const handleCancel = () => {
        handleClose();
        // history.goBack();
    }


    // modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    function ChildModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };



        return (
            <React.Fragment>
                <Button onClick={handleDelete}>Delete</Button>
                <Button onClick={handleCancel}>Cancel</Button>
                {/* <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 200 }}>
                        <h2 id="child-modal-title">Text in a child modal</h2>
                        <p id="child-modal-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Button onClick={handleClose}>Close Child Modal</Button>
                    </Box>
                </Modal> */}
            </React.Fragment>
        );
    }



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleExit = () => {
        history.goBack();
    }


    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>

            <CloseIcon
                className='exit-icon'
                fontSize='large'
                onClick={handleExit}
            />

            <div className="event-approved-list-container">
                {fetchEventId.map((detail, i) => {
                    return (
                        <div id={i}>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Paper
                                            sx={{
                                                height: 140,
                                            }}
                                        >
                                            <img
                                                src={detail.image} // Gonna be {detail.image}
                                                loading="lazy"
                                                height="140px"
                                                width="100%"
                                            />
                                        </Paper>
                                    </Grid>


                                    <Grid sx={{width: '100%', background: 'black'}}>
                                        <Item
                                            className='detail-name'
                                        >{detail.name}</Item>
                                        <Grid item xs={12}>

                                            <Item>

                                                {user.access_level != 2 ?


                                                    <Button
                                                        onClick={handleSave}
                                                        variant="contained"
                                                        startIcon={<EditIcon />}
                                                    >Save</Button>

                                                    :

                                                    <div></div>

                                                }

                                                {user.access_level >= 2 ?
                                                    <Button
                                                        variant="contained"
                                                        startIcon={<EditIcon />}
                                                    >Edit</Button>

                                                    :

                                                    <div></div>

                                                }


                                                {user.access_level >= 2 ?

                                                    <Button
                                                        startIcon={<ContentCopyIcon />}
                                                        variant="contained"
                                                    >Copy</Button>

                                                    :

                                                    <div></div>
                                                }

                                                {user.access_level >= 2 ?

                                                    <Button onClick={handleOpen} variant="contained" startIcon={<DeleteIcon />}>
                                                        Delete
                                                    </Button>

                                                    :

                                                    <div></div>

                                                }

                                            </Item>
                                        </Grid>
                                    </Grid>




                                    <Grid sx={{width: '100%', background: '#4444'}} >
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

                                </Grid>
                            </Box>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >
                                <Box sx={{ ...style, width: 400 }}>
                                    <h2 id="parent-modal-title">Deleting</h2>
                                    <p id="parent-modal-description">
                                        You Are Deleting "{detail.name}". Are You Sure?
                                    </p>
                                    <ChildModal />
                                </Box>
                            </Modal>
                        </div>
                    )
                })}
            </div>




        </div>





    )
}