const fetchEventId = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_EVENT_ID":
      return action.payload[0];
    default:
      return state;
  }
};

export default fetchEventId;
