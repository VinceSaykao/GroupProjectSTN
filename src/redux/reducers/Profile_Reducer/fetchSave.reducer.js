const fetchSave = (state = [], action) => {
  switch (action.type) {
    case "SET_FETCH_SAVE_EVENT":
      return action.payload;
    default:
      return state;
  }
};

export default fetchSave;
