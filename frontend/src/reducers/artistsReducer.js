const artistsReducer = (state = { artists: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_ARTISTS":
            return {
                ...state,
                loading: false,
                artists: action.artists
            }
        case "ADD_ARTIST":
            return {
                ...state,
                artists: [...state.artists, action.artist]
            }
            default: 
                return state;
        }
        
    }

    export default artistsReducer;

