import { Category } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';

function CategoryItem({category}) {

    return (
        <MenuItem value={category.id}>{category.name}</MenuItem>
    )
}

export default CategoryItem;