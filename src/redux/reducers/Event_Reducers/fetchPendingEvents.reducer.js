const fetchPendingEvents = (state = [], action) => {
    switch (action.type) {
        case "SET_FETCH_PENDING_EVENT_ADMIN":
            return action.payload;
        default:
            return state;
    }
};

export default fetchPendingEvents;
