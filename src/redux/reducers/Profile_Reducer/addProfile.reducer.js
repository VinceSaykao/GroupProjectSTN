const addProfile = (state = [], action){
  switch (action.type) {
    case "SET_ADD_PROFILE":
      return action.payload;
    default:
      return state;
  }
};

export default addProfile