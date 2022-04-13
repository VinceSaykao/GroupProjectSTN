const fetchPendingEvents = (state = [], action) => {
    switch (action.type) {
        case "SET_FETCH_PENDING_EVENTS":
            return action.payload;
        default:
            return state;
    }
};

export default fetchPendingEvents;
