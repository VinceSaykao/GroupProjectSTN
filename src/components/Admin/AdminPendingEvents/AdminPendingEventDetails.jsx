import { Helmet } from 'react-helmet';
import { useSelector } from "react-redux";

import "./AdminPendingEventDetails.scss";

//MUI
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function AdminPendingEventDetails() {

    const fetchEventId = useSelector(store => store.fetchEventId)


    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>

            <div className='admin-pending-event-detail-container'>
            {fetchEventId.map((detail,i) => {
                return (
                    <div id={i}>
                    <p>You Live In: </p>{detail.city}
                    <Button variant="contained" startIcon={<CheckCircleOutlineIcon fontSize='large'/>}>
                Approve
            </Button>

            <Button variant="contained" startIcon={<CloseIcon fontSize='large'/>}>
                Deny
            </Button>
                    </div>
                )
            })}
            </div>

        </div>
    )

}; // end of function