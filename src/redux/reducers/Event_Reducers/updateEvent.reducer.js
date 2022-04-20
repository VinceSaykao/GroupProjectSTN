const updateEvent = (state = [], action) => {
  switch (action.type) {
    case 'SET_UPDATE_EVENT':
      return action.payload[0];
    case 'SET_EDIT_UPDATE_EVENT':
      return {
        ...state,
        // brackets represent a string of whatever value is passed (i.e. 'name', 'website', etc)
        [action.payload.property]: action.payload.value,
      }
    default:
      return state;
  }
};

export default updateEvent;
