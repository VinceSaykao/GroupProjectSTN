const fetchProfileEvent = (state = [], action) => {
  switch (action.type) {
    case "SET_PROFILE_EVENT":
      return action.payload;
    default:
      return state;
  }
};
