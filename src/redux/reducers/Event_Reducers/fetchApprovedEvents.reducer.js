const fetchApprovedEvents = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_APPROVED_EVENTS":
      return action.payload;
    default:
      return state;
  }
};

export default fetchApprovedEvents;
