export const getSongs = () => {
    return dispatch => {
        dispatch({ type: "LOADING" }) 
        fetch("http://localhost:3001/songs")
        .then(resp => resp.json())
        .then(songs => dispatch({ type: "SET_SONGS", songs}))
    }
}

export const addSong = (song, history) => {
    return dispatch => {
        fetch("http://localhost:3001/songs",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ song })
        })
        .then(resp => resp.json())
        .then(song => 
            dispatch({ type: "ADD_SONG", song }))
            history.push("/songs")
    }
}