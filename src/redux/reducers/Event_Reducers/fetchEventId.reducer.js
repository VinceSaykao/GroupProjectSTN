const fetchEventId = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_EVENT_ID":
      return action.payload;
    default:
      return state;
  }
};

export default fetchEventId;
