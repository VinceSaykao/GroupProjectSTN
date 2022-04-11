const addOrganization = (state = [], action) => {
  switch (action.type) {
    case "SET_ADD_ORGANIZATION":
      return action.payload;
    default:
      return state;
  }
};

export default addOrganization;
