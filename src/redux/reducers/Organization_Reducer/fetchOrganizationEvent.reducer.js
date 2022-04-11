const fetchOrganizationEvent = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_EVENT_ORGANIZATION":
      return action.payload;
    default:
      return state;
  }
};

export default fetchOrganizationEvent;
