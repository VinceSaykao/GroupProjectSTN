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



import { useSelector } from "react-redux";
import "./AdminEventDetails.scss";

import { Helmet } from 'react-helmet';

export default function AdminEventDetails() {

    const fetchEventId = useSelector(store => store.fetchEventId)



    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    console.log('detail', fetchEventId) // need to fetch month and date
    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>

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
                                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
                                                    variant="contained"
                                                    startIcon={<EditIcon />}
                                                >Edit</Button>
                                                <Button
                                                    startIcon={<ContentCopyIcon />}
                                                    variant="contained"
                                                >Copy</Button>
                                                <Button variant="contained" startIcon={<DeleteIcon />}>
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
                        </div>
                    )
                })}
            </div>

        </div>
    )
}