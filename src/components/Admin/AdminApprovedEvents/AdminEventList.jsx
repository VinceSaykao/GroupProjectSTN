// React Imports 
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet';

// MUI Imports
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { Divider, Grid } from '@mui/material';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// MUI Tab
import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';

// Components & CSS imports
import AdminPendingEventList from '../AdminPendingEvents/AdminPendingEventList';
import AdminEventListItem from "./AdminEventListItem";
import AdminEventListFilterItem from "./AdminEventListFilterItem";
import './AdminEventList.scss';

// MUI Tab Functions
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

// ===============================================================================
//  MUI CUSTOM ACCORDION THEMES
// ===============================================================================

// -------- ACCORDION --------- //
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

// ----- ACCORDION SUMMARY ----- //
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    // backgroundColor:
    //   theme.palette.mode === 'dark'
    //     ? 'rgba(255, 255, 255, .05)'
    //     : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

// ----- ACCORDION DETAILS ----- //
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// ===============================================================================
//  FUNCTION 
// ===============================================================================

export default function AdminEventList() {

    // store that grabs approved events, although fetchApprovedEvents brings in more data...??
    const fetchApprovedEvents = useSelector(store => store.fetchApprovedEvents);
    const categories = useSelector(store => store.categories);
    const filters = useSelector(store => store.filters);


    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect to grab the approved events
    useEffect(() => {
        dispatch({ type: 'FETCH_APPROVED_EVENTS' });
        dispatch({ type: 'FETCH_CATEGORIES' })
    }, []);


    // MUI Tab ------------------------------------------
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    // End MUI Tab ----------------------------------------


    // Search Function ------------------------------------
    const handleSearch = (event) => {
        event.preventDefault();
        // Searching Approved Events...
        if (value == 0) {
            // if user enters search
            if (event.target.value.length > 0) {
                dispatch({ type: 'FETCH_APPROVED_SEARCH', payload: { search: event.target.value } })
            }
            // if search is left blank
            else {
                dispatch({ type: 'FETCH_APPROVED_EVENTS' })
            }
        }
        // Searching Pending Events...
        if (value == 1) {
            // if user enters search
            if (event.target.value.length > 0) {
                dispatch({ type: 'FETCH_PENDING_SEARCH', payload: { search: event.target.value } })
            }
            // if search is left blank
            else {
                dispatch({ type: 'FETCH_PENDING_EVENT_ADMIN' })
            }
        }
    }

    const [expandedFilter1, setExpandedFilter1] = useState(false);

    const handleFilterSubmit = () => {
        dispatch({ type: 'FETCH_FILTERED_EVENTS' })
    }

    // const handleFilterSubmit = () => {

    //     let filteredArray = fetchApprovedEvents;
    //     if (!filters.selected_category_1) {
    //         filteredArray = filteredArray.filter(event => event.category_id != 1); // 1 = id for Community Council Meetings
    //       }
    //     if (!filters.selected_category_2) {
    //         filteredArray = filteredArray.filter(event => event.category_id != 2); // 2 = id for Education
    //       }
    //     if (!filters.selected_category_3) {
    //         filteredArray = filteredArray.filter(event => event.category_id != 3); // 3 = id for Park & City Cleanup
    //       }
    //     if (!filters.selected_category_4) {
    //         filteredArray = filteredArray.filter(event => event.category_id != 4); // 4 = id for Community Drives
    //       }
    //     if (!filters.selected_category_5) {
    //         filteredArray = filteredArray.filter(event => event.category_id != 5); // 5 = id for Community Events
    //       }
    //     if (!filters.selected_category_6) {
    //         filteredArray = filteredArray.filter(event => event.category_id != 6); // 6 = id for Popups
    //       }
    //     if (!filters.selected_category_7) {
    //         filteredArray = filteredArray.filter(event => event.category_id != 7); // 7 = id for Philanthropy & Donations
    //       }
    //     if (!filters.selected_category_8) {
    //         filteredArray = filteredArray.filter(event => event.category_id != 8); // 8 = id for Other
    //       }
    //     dispatch({ type: 'SET_FETCH_APPROVED_EVENT', payload: filteredArray })
    // }

    // End Search Function ------------------------------------

    // ===============================================================================
    //     RETURN
    // ===============================================================================



    console.log()

    return (
        <div className="admin-event-view">

            <Helmet>
                <style>
                    {`body { background-color: #090909ee; overflow: hidden;); }`}
                </style>
            </Helmet>

            {/* <h1 className="admin-event-header">Admin Event List</h1> */}
            <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', my: 2 }}>Admin Event List</Typography>


            <div>
    
                <div className="admin-search-div">
                    <InputBase
                        sx={{ ml: 5, flex: 1, bgcolor: 'white', }}
                        placeholder="Search"
                        // inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={event => handleSearch(event)}
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </div>
                

                {/* Filter by Category in progress...
                
                <Accordion expanded={expandedFilter1} sx={{ mt: 2, mx: 3 }}>
                    <AccordionSummary
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                        onClick={() => setExpandedFilter1(!expandedFilter1)}
                    >
                        <Typography>Filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            {categories.map(category => (
                                <AdminEventListFilterItem 
                                    key={category.id} 
                                    category={category} 
                                    handleSearch={handleSearch}/>
                            ))}
                        </FormGroup>
                        <Button 
                            variant="contained"
                            onClick={handleFilterSubmit}
                        >
                            Filter
                        </Button>
                    </AccordionDetails>
                </Accordion > 
                
                */}

                <Divider sx={{ height: 10, m: 0.5 }} orientation="vertical" />

                <Box
                    className="event-tab"
                    sx={{ bgcolor: 'background.paper', height: '0px', width: '100%', textAlign: 'center', }}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Approved" {...a11yProps(0)} />
                            <Tab label="Pending" {...a11yProps(1)} />

                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>





                            <div className="approved-event-list">
                                {fetchApprovedEvents?.map((event, i) => {
                                    return (
                                        <div key={i}>


                                            <AdminEventListItem
                                                event={event}
                                            />

                                        </div>
                                    )
                                })}
                            </div>

                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <AdminPendingEventList />
                        </TabPanel>

                    </SwipeableViews>
                </Box>






                {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}


            </div>





        </div>
    )

}; 