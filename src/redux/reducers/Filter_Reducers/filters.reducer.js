const filters = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILTERS':
            return {
                ...state,
                // brackets represent a string of whatever value is passed (i.e. 'name', 'website', etc)
                [action.payload.property]: action.payload.value,
            }
        default:
            return {
                ...state,
                selected_category_1: false,
                selected_category_2: false,
                selected_category_3: false,
                selected_category_4: false,
                selected_category_5: false,
                selected_category_6: false,
                selected_category_7: false,
                selected_category_8: false,
            }
    }
}

export default filters;