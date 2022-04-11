const fetchEventAdmin = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_EVENT_ADMIN":
      return action.payload;
    default:
      return state;
  }
};

export default fetchEventAdmin;
