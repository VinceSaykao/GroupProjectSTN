const fetchOrganization = (state = [], action) => {
  switch (action.type) {
    case "SET_ORG_PROFILE":
      return action.payload;
    default:
      return state;
  }
};

export default fetchOrganization;
