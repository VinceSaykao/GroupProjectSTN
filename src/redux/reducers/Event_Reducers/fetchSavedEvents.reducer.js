const fetchSavedEvents = (state = [], action) => {
    switch (action.type) {
      case "SET_FETCH_SAVED_EVENTS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default fetchSavedEvents;
  