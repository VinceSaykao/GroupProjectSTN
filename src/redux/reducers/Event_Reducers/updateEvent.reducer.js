const updateEvent = (state = [], action) => {
  switch (action.type) {
    case "SET_UPDATE_EVENT":
      return action.payload;
    default:
      return state;
  }
};

export default updateEvent;
