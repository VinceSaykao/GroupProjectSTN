const fetchEventProfile = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_EVENT_PROFILE":
      return action.payload;
    default:
      return state;
  }
};

export default fetchEventProfile;
