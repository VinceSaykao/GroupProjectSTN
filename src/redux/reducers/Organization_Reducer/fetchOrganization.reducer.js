const fetchOrganization = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_ORGANIZATION":
      return action.payload;
    default:
      return state;
  }
};

export default fetchOrganization;
