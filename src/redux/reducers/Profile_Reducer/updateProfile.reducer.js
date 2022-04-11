const updateProfile = (state = [], action) => {
  switch (action.type) {
    case "SET_UPDATE_PROFILE":
      return action.payload;
    default:
      return state;
  }
};

export default updateProfile;
