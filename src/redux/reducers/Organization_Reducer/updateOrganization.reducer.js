const updateOrganization = (state = [], action) => {
  switch (action.type) {
    case "SET_UPDATE_ORGANIZATION":
      return action.payload;
    default:
      return state;
  }
};

export default updateOrganization;
