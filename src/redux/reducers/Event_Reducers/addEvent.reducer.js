const addEvent = (state = [], action) => {
  switch (action.type) {
    case "SET_ADD_EVENT":
      return{
        ...state,
        // brackets represent a string of whatever value is passed (i.e. 'name', 'website', etc)
        [action.payload.property]: action.payload.value,
      }
      case "SET_EDIT_EVENT":
        return action.payload
    default:
      return {
        ...state,
        category_id: '',
        name: '',
        description: '',
        status: 'pending',
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        start_time: new Date().toISOString().slice(11, 16),
        end_time: new Date().toISOString().slice(11, 16),
        image: '',
        address1: '',
        address2: '',
        city: '',
        zip: null,
        state: '',
        email: '',
        phone: '',
        link: '',
      }
  }
};

export default addEvent;
