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
        org_id: '',
        category_id: '',
        status: 'pending',
        name: '',
        description: '',
        link: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        image: '',
        address1: '',
        address2: '',
        city: '',
        zip: '',
        state: '',
        feedback: '',
      }
  }
};

export default addEvent;
