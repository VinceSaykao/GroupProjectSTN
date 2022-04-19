const fetchAllOrganizations = (state = [], action) => {
  switch (action.type) {
      case 'SET_USER_ORG_ID':
          return action.payload;
      default: 
          return state;
  }
}

export default fetchAllOrganizations;