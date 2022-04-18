const fetchAllOrganizations = (state = [], action) => {
  switch (action.type) {
      case 'SET_FETCH_ORGANIZATIONS':
          return action.payload;
      default: 
          return state;
  }
}

export default fetchAllOrganizations;