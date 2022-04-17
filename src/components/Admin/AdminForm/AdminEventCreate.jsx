import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import MobileDatePicker from '@mui/lab/MobileDatePicker';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CategoryItem from './CategoryItem'; // No Longer used

import icon_cleanup from '../../../category_icons/icon_cleanup.png'
import icon_community_meeting from '../../../category_icons/icon_community_meeting.png'
import icon_donations from '../../../category_icons/icon_donations.png'
import icon_drives from '../../../category_icons/icon_drives.png'
import icon_education from '../../../category_icons/icon_education.png'
import icon_events from '../../../category_icons/icon_events.png'
import icon_popups from '../../../category_icons/icon_popups.png'
import icon_other from '../../../category_icons/icon_other.png'

import './CategoryItem.css' // Used for icon spacing

function AdminEventCreate() {

    const dispatch = useDispatch();
    const newEvent = useSelector(store => store.addEvent);
    const categories = useSelector(store => store.categories);

    // ------- Date Time Dispatches -------------------------------------------------------------- //

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date(), 'hh:mm:ss');
    const [endTime, setEndTime] = useState(new Date(), 'hh:mm:ss');

    const dispatchStartDate = (newStartDate) => {
        setStartDate(newStartDate);
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'start_date', value: startDate } })
    }
    const dispatchEndDate = (newEndDate) => {
        setEndDate(newEndDate);
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'end_date', value: endDate } })
    }
    const dispatchStartTime = (newStartTime) => {
        setStartTime(newStartTime);
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'start_time', value: startTime } })
    }
    const dispatchEndTime = (newEndTime) => {
        setEndTime(newEndTime);
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'end_time', value: endTime } })
    }
    // ------------------------------------------------------------------------------------------ //

    const handleSubmit = () => {
        dispatch({ type: 'POST_EVENT', payload: newEvent })
        console.log('newEvent":', newEvent);
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORIES' })
    }, [])

    const dispatchTimeTest = (time) => {
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'start_time', value: time }});
    }
    
    const [time, setTime] = useState('04:20')
    console.log('time', time);

    return (
        <Box sx={{ mx: 2 }}>

            {/*  ----- EVENT DETAIL ------------------------------------------------ */}

            <Typography variant="h5" sx={{ my: 2 }}>Event Detail</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Event Name"
                        autoComplete="off"
                        value={newEvent.name}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'name', value: e.target.value } })}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        autoComplete="off"
                        value={newEvent.description}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'description', value: e.target.value } })}
                        required
                        minRows={3}
                        multiline
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Image / Flyer"
                        autoComplete="off"
                        value={newEvent.image}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'image', value: e.target.value } })}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControl sx={{ minWidth: "100%" }}>
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                            value={newEvent.category_id}
                            label="Category"
                            onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'category_id', value: e.target.value } })}
                        >

                            {categories.map(category => (
                                <MenuItem key={category.id} value={category.id}>
                                    {/* -------- Conditional Rendering for Icons ----------------------------------- */}
                                    {category.id == 1 && <img className="icon_dropdown" src={icon_cleanup} />}
                                    {category.id == 2 && <img className="icon_dropdown" src={icon_community_meeting} />}
                                    {category.id == 3 && <img className="icon_dropdown" src={icon_donations} />}
                                    {category.id == 4 && <img className="icon_dropdown" src={icon_drives} />}
                                    {category.id == 5 && <img className="icon_dropdown" src={icon_education} />}
                                    {category.id == 6 && <img className="icon_dropdown" src={icon_events} />}
                                    {category.id == 7 && <img className="icon_dropdown" src={icon_popups} />}
                                    {category.id == 8 && <img className="icon_dropdown" src={icon_other} />}
                                    {/* ---------------------------------------------------------------------------- */}
                                    {category.name}
                                </MenuItem>
                            ))};
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            {/*  ----- TIME & DATE ------------------------------------------------------ */}

            <Typography variant="h5" sx={{ my: 2 }}>Time & Date</Typography>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                            label="Start Date"
                            inputFormat="MM/dd/yyyy"
                            value={startDate}
                            onChange={dispatchStartDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                            label="End Date"
                            value={endDate}
                            onChange={dispatchEndDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {/* <MobileTimePicker
                            label="Start Time"
                            value={startTime}
                            onChange={dispatchStartTime}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}

                        <TextField
                            id="time"
                            label="Start Time"
                            type="time"
                            // defaultValue="03:30"
                            // value={newEvent.start_time}
                            onChange={e => dispatchTimeTest(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />


                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileTimePicker
                            label="End Time"
                            value={endTime}
                            onChange={dispatchEndTime}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>

            {/*  ----- CONTACT & LOCATION ------------------------------------------------ */}

            <Typography variant="h5" sx={{ my: 2 }}>Contact & Location</Typography>

            <Grid container spacing={2} sx={{ mb: 10 }}>
                <Grid item xs={12}>
                    <TextField
                        label="Sign Up Link"
                        autoComplete="off"
                        value={newEvent.link}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'link', value: e.target.value } })}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        autoComplete="off"
                        value={newEvent.email}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'email', value: e.target.value } })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Phone #"
                        autoComplete="off"
                        value={newEvent.phone}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'phone', value: e.target.value } })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Address Line 1"
                        autoComplete="off"
                        value={newEvent.address1}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'address1', value: e.target.value } })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Address Line 2"
                        autoComplete="off"
                        value={newEvent.address2}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'address2', value: e.target.value } })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="City"
                        autoComplete="off"
                        value={newEvent.city}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'city', value: e.target.value } })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="State"
                        autoComplete="off"
                        value={newEvent.state}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'state', value: e.target.value } })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Zip Code"
                        autoComplete="off"
                        value={newEvent.zip}
                        onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'zip', value: e.target.value } })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{ alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        fullWidth
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box >
    )
}

export default AdminEventCreate;