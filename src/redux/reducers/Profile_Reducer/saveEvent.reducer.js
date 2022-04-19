const addSaveEvent = (state = [], action) => {
  switch (action.type) {
    case "SET_SAVE_EVENT":
      return action.payload;
    default:
      return state;
  }
};

export default addSaveEvent;
