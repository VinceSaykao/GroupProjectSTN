const fetchOrgEvents = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_ORG_EVENTS":
      return action.payload;
    default:
      return state;
  }
};

export default fetchOrgEvents;
