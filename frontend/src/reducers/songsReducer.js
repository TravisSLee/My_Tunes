const initialState = {
    songs: [],
    loading: true
}

const songsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_SONGS":
        return {
            ...state,
            loading: false,
            songs: action.songs
        }
        case "ADD_SONG":
            return {
                ...state,
                songs: [...state.songs, action.song]
            }
        case "DELETE_SONG":
            let songs = state.songs.filter(song => song.id !== action.song.id);
            debugger
            return {
                ...state, 
                songs
            }
        default: 
            return state;
    }
}

export default songsReducer;