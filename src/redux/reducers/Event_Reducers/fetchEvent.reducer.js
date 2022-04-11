const fetchEvent = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_EVENT":
      return action.payload;
    default:
      return state;
  }
};

export default fetchEvent;
