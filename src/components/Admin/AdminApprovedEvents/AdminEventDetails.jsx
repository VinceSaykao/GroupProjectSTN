// Event Details
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';


//modal
import Modal from '@mui/material/Modal';


import { useSelector,  useDispatch  } from "react-redux";
import "./AdminEventDetails.scss";
import { useHistory} from 'react-router-dom'

import { Helmet } from 'react-helmet';

export default function AdminEventDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    const fetchEventId = useSelector(store => store.fetchEventId)


    // Styles the items mui
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const handleSave = () => {
        dispatch({type:"SET_SAVE_EVENT" , payload: action})
    }

    const handleDelete = () => {
        dispatch ({type: 'DELETE_EVENT', payload: fetchEventId[0].id})
        history.push("/adminlist");

    }

    const handleCancel = () => {
        history.goBack();
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
                <Button onClick={handleSave}>Save</Button>
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




    console.log(fetchEventId)
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
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Paper
                                            sx={{
                                                height: 140,
                                            }}
                                        >
                                            <img
                                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" // Gonna be {detail.image}
                                                loading="lazy"
                                                height="140px"
                                                width="100%"
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Item>{detail.name}</Item>
                                        <Grid item xs={12}>

                                            <Item>
                                            <Button
                                                    onClick={handleSave}
                                                    variant="contained"
                                                    startIcon={<EditIcon />}
                                                >Save</Button>
                                                <Button
                                                    variant="contained"
                                                    startIcon={<EditIcon />}
                                                >Edit</Button>
                                                <Button
                                                    startIcon={<ContentCopyIcon />}
                                                    variant="contained"
                                                >Copy</Button>
                                                <Button onClick={handleOpen} variant="contained" startIcon={<DeleteIcon />}>
                                                    Delete
                                                </Button>
                                                
                                            </Item>
                                        </Grid>
                                    </Grid>




                                    <Grid item xs={12}>
                                        <Item>{detail.description}</Item>
                                        <Item>{detail.month}</Item>
                                        <Item>{detail.description}</Item>
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