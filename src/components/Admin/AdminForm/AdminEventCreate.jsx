// REACT IMPORTS
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI IMPORTS
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Time Library

// ICON IMPORT
import icon_cleanup from '../../../category_icons/icon_cleanup.png';
import icon_community_meeting from '../../../category_icons/icon_community_meeting.png';
import icon_donations from '../../../category_icons/icon_donations.png';
import icon_drives from '../../../category_icons/icon_drives.png';
import icon_education from '../../../category_icons/icon_education.png';
import icon_events from '../../../category_icons/icon_events.png';
import icon_popups from '../../../category_icons/icon_popups.png';
import icon_other from '../../../category_icons/icon_other.png';

// CSS for Icons
import './CategoryItem.css';

// CUSTOM MUI Phone TextField
import MuiPhoneNumber from 'material-ui-phone-number';

function AdminEventCreate() {

    // Included for USA State Dropdown
    let usaStateList = [
        { value: "AK", text: "Alaska" },
        { value: "AL", text: "Alabama" },
        { value: "AR", text: "Arkansas" },
        { value: "AS", text: "American Samoa" },
        { value: "AZ", text: "Arizona" },
        { value: "CA", text: "California" },
        { value: "CO", text: "Colorado" },
        { value: "CT", text: "Connecticut" },
        { value: "DC", text: "District of Columbia" },
        { value: "DE", text: "Delaware" },
        { value: "FL", text: "Florida" },
        { value: "GA", text: "Georgia" },
        { value: "GU", text: "Guam" },
        { value: "HI", text: "Hawaii" },
        { value: "IA", text: "Iowa" },
        { value: "ID", text: "Idaho" },
        { value: "IL", text: "Illinois" },
        { value: "IN", text: "Indiana" },
        { value: "KS", text: "Kansas" },
        { value: "KY", text: "Kentucky" },
        { value: "LA", text: "Louisiana" },
        { value: "MA", text: "Massachusetts" },
        { value: "MD", text: "Maryland" },
        { value: "ME", text: "Maine" },
        { value: "MI", text: "Michigan" },
        { value: "MN", text: "Minnesota" },
        { value: "MO", text: "Missouri" },
        { value: "MS", text: "Mississippi" },
        { value: "MT", text: "Montana" },
        { value: "NC", text: "North Carolina" },
        { value: "ND", text: "North Dakota" },
        { value: "NE", text: "Nebraska" },
        { value: "NH", text: "New Hampshire" },
        { value: "NJ", text: "New Jersey" },
        { value: "NM", text: "New Mexico" },
        { value: "NV", text: "Nevada" },
        { value: "NY", text: "New York" },
        { value: "OH", text: "Ohio" },
        { value: "OK", text: "Oklahoma" },
        { value: "OR", text: "Oregon" },
        { value: "PA", text: "Pennsylvania" },
        { value: "PR", text: "Puerto Rico" },
        { value: "RI", text: "Rhode Island" },
        { value: "SC", text: "South Carolina" },
        { value: "SD", text: "South Dakota" },
        { value: "TN", text: "Tennessee" },
        { value: "TX", text: "Texas" },
        { value: "UT", text: "Utah" },
        { value: "VA", text: "Virginia" },
        { value: "VI", text: "Virgin Islands" },
        { value: "VT", text: "Vermont" },
        { value: "WA", text: "Washington" },
        { value: "WI", text: "Wisconsin" },
        { value: "WV", text: "West Virginia" },
        { value: "WY", text: "Wyoming" }
    ];

    // --- MUI VARIANT TOGGLE ---------------------------------------- 
    // const muiVariant = 'standard';   // Global Page MUI Variant
    // const muiVariant = 'filled';     // Global Page MUI Variant
    const muiVariant = 'outlined';      // Global Page MUI Variant
    // ------------------------------------------------------------

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);
    const newEvent = useSelector(store => store.addEvent);
    const categories = useSelector(store => store.categories);

    // Form Submit
    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'POST_EVENT', payload: newEvent })
        history.goBack();
        
    }

    // Fetches Categories on page load
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ type: 'FETCH_CATEGORIES' })
    }, []); 

    // Automatically assigns user.org_id to addEvent Reducer
    useEffect(() => {
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'org_id', value: user.org_id }})
    }, [user]);

    let today = new Date().toISOString()
    console.log('today:', today)
    let today2 = new Date().toISOString().slice(11, 16);
    console.log('today2:', today2);

    return (
        <Box
            sx={{ mx: 2 }}
        >
            <form onSubmit={event => handleFormSubmit(event)}>

                {/*  -----------------------------------------------------------------------
                            EVENT DETAIL
                ------------------------------------------------------------------------- */}

                <Typography variant="h5" sx={{ my: 2 }}>Event Detail</Typography>
                
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant={muiVariant}
                            label="Event Name"
                            autoComplete="off"
                            value={newEvent.name}
                            onChange={e => dispatch({
                                type: 'SET_ADD_EVENT',
                                payload: { property: 'name', value: e.target.value }
                            })}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant={muiVariant}
                            label="Sign Up Link"
                            autoComplete="off"
                            value={newEvent.link}
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'link', value: e.target.value } 
                            })}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant={muiVariant}
                            label="Description"
                            autoComplete="off"
                            value={newEvent.description}
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'description', value: e.target.value } 
                            })}
                            required
                            // minRows={3}
                            multiline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant={muiVariant}
                            label="Image / Flyer URL"
                            autoComplete="off"
                            value={newEvent.image}
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'image', value: e.target.value } 
                            })}
                            fullWidth
                        />
                    </Grid>
                    

                    <Grid item xs={12}>
                        <FormControl sx={{ minWidth: "100%" }} required>
                            <InputLabel variant={muiVariant}>Category</InputLabel>
                            <Select
                                label="Category"
                                variant={muiVariant}
                                value={newEvent.category_id}
                                onChange={e => dispatch({ 
                                    type: 'SET_ADD_EVENT', 
                                    payload: { property: 'category_id', value: e.target.value } 
                                })}
                                
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

                {/*  -----------------------------------------------------------------------
                            TIME & DATE
                ------------------------------------------------------------------------- */}

                <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Time & Date</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>

                            {/* -----  MUI DATE PICKER ----- */}
                            {/* <MobileDatePicker
                            label="Start Date"
                            inputFormat="MM/dd/yyyy"
                            value={newEvent.start_date}
                            onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'start_date', value: e.target.value } })}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}

                            <TextField
                                variant={muiVariant}
                                id="date"
                                label="Start Date"
                                type="date"
                                value={newEvent.start_date}
                                onChange={e => dispatch({ 
                                    type: 'SET_ADD_EVENT', 
                                    payload: { property: 'start_date', value: e.target.value } 
                                })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                required
                            />

                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>

                            {/* -----  MUI DATE PICKER ----- */}
                            {/* <MobileDatePicker
                            label="End Date"
                            value={newEvent.end_date}
                            onChange={dispatchEndDate}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}

                            <TextField
                                variant={muiVariant}
                                id="date"
                                label="End Date"
                                type="date"
                                value={newEvent.end_date}
                                onChange={e => dispatch({ 
                                    type: 'SET_ADD_EVENT', 
                                    payload: { property: 'end_date', value: e.target.value } 
                                })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                required
                            />

                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>

                            {/* -----  MUI TIME PICKER ----- */}
                            {/* <MobileTimePicker
                            label="Start Time"
                            value={startTime}
                            onChange={dispatchStartTime}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}

                            <TextField
                                variant={muiVariant}
                                id="time"
                                label="Start Time"
                                type="time"
                                value={newEvent.start_time}
                                onChange={e => dispatch({ 
                                    type: 'SET_ADD_EVENT', 
                                    payload: { property: 'start_time', value: e.target.value } 
                                })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                required
                            />


                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>

                            {/* -----  MUI TIME PICKER ----- */}
                            {/* <MobileTimePicker
                            label="End Time"
                            value={newEvent.end_time}
                            onChange={dispatchEndTime}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}

                            <TextField
                                variant={muiVariant}
                                id="time"
                                label="End Time"
                                type="time"
                                value={newEvent.end_time}
                                onChange={e => dispatch({ 
                                    type: 'SET_ADD_EVENT', 
                                    payload: { property: 'end_time', value: e.target.value } 
                                })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                required
                            />

                        </LocalizationProvider>
                    </Grid>
                </Grid>

                {/*  -----------------------------------------------------------------------
                            CONTACT & LOCATION
                ------------------------------------------------------------------------- */}

                <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Contact & Location</Typography>

                <Grid container spacing={2} sx={{ pb: 4 }}>
                    <Grid item xs={12}>
                        <TextField
                            variant={muiVariant}
                            label="Email"
                            autoComplete="off"
                            value={newEvent.email}
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'email', value: e.target.value } 
                            })}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPhoneNumber 
                            fullWidth
                            variant={muiVariant}
                            value={newEvent.phone}
                            defaultCountry={'us'}
                            onlyCountries={['us','ca','mx','pr']}
                            disableAreaCodes
                            label="Phone #"
                            autoComplete="off"            
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'phone', value: e } 
                            })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant={muiVariant}
                            label="Address Line 1"
                            autoComplete="off"
                            value={newEvent.address1}
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'address1', value: e.target.value } 
                            })}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant={muiVariant}
                            label="Address Line 2"
                            autoComplete="off"
                            value={newEvent.address2}
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'address2', value: e.target.value } 
                            })}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant={muiVariant}
                            label="City"
                            autoComplete="off"
                            value={newEvent.city}
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'city', value: e.target.value } 
                            })}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl sx={{ minWidth: "100%" }}>
                            <InputLabel id="state">State</InputLabel>
                            <Select
                                variant={muiVariant}
                                value={newEvent.state}
                                autoComplete="off"
                                label="State"
                                onChange={e => dispatch({ 
                                    type: 'SET_ADD_EVENT', 
                                    payload: { property: 'state', value: e.target.value } 
                                })}
                            >
                                {usaStateList.map(usaState => (
                                    <MenuItem key={usaState.value} value={usaState.value}>{usaState.value}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant={muiVariant}
                            label="Zip"
                            type='text'
                            autoComplete='off'
                            value={newEvent.zip}
                            onChange={e => dispatch({ 
                                type: 'SET_ADD_EVENT', 
                                payload: { property: 'zip', value: e.target.value } 
                            })}
                            inputProps={{ maxLength: 5 }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ alignItems: 'center', mt: 4 }}>
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    )
}

export default AdminEventCreate;