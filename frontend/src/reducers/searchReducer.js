const searchReducer = (state = { query: ''}, action) => {
    switch(action.type) {
        case "SEARCH":
            return {
                ...state,
                query: action.query
            }
        default: 
            return state;
    }
}

export default searchReducer;