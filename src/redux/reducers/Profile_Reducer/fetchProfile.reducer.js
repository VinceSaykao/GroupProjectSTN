const fetchProfile = (state = [], action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return action.payload;
    default:
      return state;
  }
};

export default fetchProfile