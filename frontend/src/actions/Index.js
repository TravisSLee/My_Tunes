export const getSongs = () => {
    return dispatch => {
        dispatch({ type: "LOADING" }) 
        fetch("http://localhost:3001/songs")
        .then(resp => resp.json())
        .then(songs => dispatch({ type: "SET_SONGS", songs}))
    }
}