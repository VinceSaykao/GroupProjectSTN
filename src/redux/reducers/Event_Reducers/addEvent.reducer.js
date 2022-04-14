const addEvent = (state = [], action) => {
  switch (action.type) {
    case "SET_ADD_EVENT":
      return{
        ...state,
        // brackets represent a string of whatever value is passed (i.e. 'name', 'website', etc)
        [action.payload.property]: action.payload.value,
      }
    default:
      return {
        ...state,
        name: '',
      }
  }
};

export default addEvent;
