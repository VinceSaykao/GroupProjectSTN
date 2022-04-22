import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Icon Import
import icon_cleanup from '../../../category_icons/icon_cleanup.png';
import icon_community_meeting from '../../../category_icons/icon_community_meeting.png';
import icon_donations from '../../../category_icons/icon_donations.png';
import icon_drives from '../../../category_icons/icon_drives.png';
import icon_education from '../../../category_icons/icon_education.png';
import icon_events from '../../../category_icons/icon_events.png';
import icon_popups from '../../../category_icons/icon_popups.png';
import icon_other from '../../../category_icons/icon_other.png';

export default function AdminEventListFilterItem({category, handleSearch}) {

    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);

    // useEffect(() => {
    //     dispatch({type: 'SET_FILTER', payload: {property: `search_${condition.code}`, value: isChecked}})
    // }, [])

    return (
        <FormControlLabel
            value={category.id}
            control={<Checkbox checked={isChecked}/>}
            label={category.name}
            onChange={event => dispatch({ 
                type: 'SET_FILTERS', 
                payload: {
                    property: `selected_category_${category.id}`,
                    value: !isChecked
                } 
            })}
            onClick={() => setIsChecked(!isChecked)}
        />
    )
}