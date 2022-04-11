const addEvent = (state = [], action) => {
  switch (action.type) {
    case "SET_ADD_EVENT":
      return action.payload;
    default:
      return state;
  }
};

export default addEvent;
