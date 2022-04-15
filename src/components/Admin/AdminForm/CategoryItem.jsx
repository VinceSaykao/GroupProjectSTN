import { Category } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';

import './CategoryItem.css'

import icon_cleanup from '../../../category_icons/icon_cleanup.png'
import icon_community_meeting from '../../../category_icons/icon_community_meeting.png'
import icon_donations from '../../../category_icons/icon_donations.png'
import icon_drives from '../../../category_icons/icon_drives.png'
import icon_education from '../../../category_icons/icon_education.png'
import icon_events from '../../../category_icons/icon_events.png'
import icon_popups from '../../../category_icons/icon_popups.png'
import icon_other from '../../../category_icons/icon_other.png'

function CategoryItem({ category }) {

    return (

        <MenuItem value={category.id}>
            {/* -------- Conditional Rendering for Icons ---------------------------------- */}
            {category.id == 1 && <img className="icon_dropdown" src={icon_cleanup} />}
            {category.id == 2 && <img className="icon_dropdown" src={icon_community_meeting} />}
            {category.id == 3 && <img className="icon_dropdown" src={icon_donations} />}
            {category.id == 4 && <img className="icon_dropdown" src={icon_drives} />}
            {category.id == 5 && <img className="icon_dropdown" src={icon_education} />}
            {category.id == 6 && <img className="icon_dropdown" src={icon_events} />}
            {category.id == 7 && <img className="icon_dropdown" src={icon_popups} />}
            {category.id == 8 && <img className="icon_dropdown" src={icon_other} />}
            {/* --------------------------------------------------------------------------- */}
            {category.name}
        </MenuItem>

    )
}

export default CategoryItem;