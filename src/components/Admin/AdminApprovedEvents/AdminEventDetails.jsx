// Event Details
import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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
        window.scrollTo(0, 0);
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

    // Date for Event
    const ItemDateTime = styled('div')(({ theme }) => ({
        // color: '#ff3700',
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


    // Regular Items
    const Item = styled('div')(({ theme }) => ({
        color: 'white',
        backgroundColor: 'transparent',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    }));





    const StyledItemDate = styled('div')(({ theme }) => ({
        color: '#ff6200',
        textAlign: 'center',
        fontSize: '30px',
        backgroundColor: 'transparent',
        borderBottom: '1px solid #fff',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    }));


    const StyleDetailItem = styled('div')(({ theme }) => ({
        fontSize: '30px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#transparent',
        padding: theme.spacing(1),
    }));


    // fix this 
    const StyledItem = styled('div')(({ theme }) => ({
        color: 'white',
        fontSize: '30px',
        backgroundColor: '#transparent',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    }));

    const StyledItemDetails = styled('div')(({ theme }) => ({
        marginTop: '-40px',
        textAlign: 'center',
        color: 'white',
        fontSize: '25px',
        backgroundColor: 'transparent',
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
        history.goBack();

    }

    const handleCancel = () => {
        handleClose();
        // history.goBack();
    }

    const handleOops = () => {
        alert('Only Registered Users Can Save!')
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

    const handleSignUp = () => {
        console.log('saved');
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
                sx={{ fontSize: '50px', }}
                onClick={handleExit}
            />



            {fetchEventId.map((detail, i) => {
                return (
                    <ItemDateTime>

                        {detail.dayname}, {detail.month} {detail.day} - {detail.end_date}
                    </ItemDateTime>

                )

            })}





            <div className="event-approved-list-container">
                {fetchEventId.map((detail, i) => {
                    return (
                        <div id={i}>

                            <Box sx={{ flexGrow: 1, height: '900px', }}>
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
                                                height="180px"
                                                width="100%"
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid sx={{ width: '100%', marginTop: '43px', background: '#090909ee', alignItems: 'center', }}>
                                        <Grid item xs={12}>
                                            <Item>
                                                {user.id ?
                                                    <></>
                                                    :
                                                    <Button
                                                        onClick={handleOops}
                                                        sx={{ background: 'green', }}
                                                        variant="contained"
                                                        startIcon={<StarIcon />}
                                                    >Save</Button>
                                                }
                                                {user.access_level >= 2 ?
                                                    <Button
                                                        onClick={handleEdit}
                                                        sx={{
                                                            color: '#fff', background: '#444',
                                                            border: '0.5px solid white'
                                                        }}
                                                        variant="contained"
                                                        startIcon={<EditIcon />}
                                                    >Edit</Button>
                                                    :
                                                    <div></div>
                                                }
                                                {user.access_level >= 2 ?
                                                    <Button
                                                        onClick={handleCopy}
                                                        sx={{
                                                            background: '#444',
                                                            border: '0.5px solid white', color: '#fff'
                                                        }}
                                                        startIcon={<ContentCopyIcon />}
                                                        variant="contained"
                                                    >Copy</Button>
                                                    :
                                                    <div></div>
                                                }
                                                {user.access_level >= 2 ?
                                                    <Button onClick={handleOpen} variant="contained" sx={{
                                                        background: '#444',
                                                        border: '0.5px solid white', color: '#fff',
                                                    }}
                                                        startIcon={<DeleteIcon />}>
                                                        Delete
                                                    </Button>
                                                    :
                                                    <div></div>
                                                }

                                            </Item>
                                        </Grid>
                                    </Grid>

                                    <Grid sx={{ width: '100%', background: '#4444' }} >
                                        <ItemName
                                            sx={{ textAlign: 'center', width: '100%', }}
                                            className='detail-name'
                                        >
                                            <b>{detail.name}</b>
                                            {user.access_level === 3 || user.access_level === 1 ?
                                                <div
                                                    className='star-saved-event'
                                                    onClick={handleSave}
                                                >
                                                    <BookmarkAddOutlinedIcon
                                                        sx={{ fontSize: '40px', right: '0', marginBottom: '-10px', color: '#3f7fff' }}
                                                    />
                                                    {/* <p className='save'>save</p> */}
                                                </div>
                                                :
                                                <div></div>
                                            }
                                        </ItemName>
                                        {/* <StyledItemDate><u>{detail.dayname}, {detail.month} {detail.day}</u></StyledItemDate> */}

                                        {detail.feedback && // ---------------- Rejection Reason ------------------------------------
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

                                        {detail.description && // ---------------- Description ------------------------------------
                                            <>
                                                <StyleDetailItem >
                                                    <u><b>Details</b></u>
                                                </StyleDetailItem>

                                                <StyledItemDetails>
                                                    <br></br>
                                                    {/* <Divider sx={{ height: 15, m: 0.5 }} orientation="vertical"/> */}
                                                    {detail.description}
                                                    <br></br>
                                                </StyledItemDetails>
                                            </>
                                        }

                                        {detail.email || detail.phone && // --------------- Phone & Email ------------------------
                                            <>
                                                <StyledItem>
                                                    <u><b>Contact</b></u>
                                                    <br></br>
                                                    {detail.email}
                                                    <br></br>
                                                    {detail.phone}
                                                </StyledItem>
                                            </>
                                        }

                                        {detail.address1 && // ---------------------------- Location ------------------------
                                            <>
                                                <StyledItem>
                                                    <u><b>Location</b></u>
                                                    <br></br>
                                                    {detail.address1}
                                                </StyledItem>
                                            </>
                                        }

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

            {
                user.access_level != 2 ?
                    <div
                        onClick={handleSignUp}
                    // src={detail.link}
                    ><h1
                        className='sign-up'
                    >Sign Up <AddOutlinedIcon
                                sx={{ fontSize: '73px', }}
                            /></h1></div>
                    :
                    <div> </div>
            }




        </div >





    )
}