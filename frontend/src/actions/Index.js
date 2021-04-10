export const getSongs = () => {
    return dispatch => {
        dispatch({ type: "LOADING" }) 
        fetch("http://localhost:3001/songs")
        .then(resp => resp.json())
        .then(songs => dispatch({ type: "SET_SONGS", songs}))
    }
}

export const getArtists = () => {
    return dispatch => {
        dispatch({ type: "LOADING" }) 
        fetch("http://localhost:3001/artists")
        .then(resp => resp.json())
        .then(artists => dispatch({ type: "SET_ARTISTS", artists}))
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

export const deleteSong = (song) => {
    return dispatch => {
        fetch("http://localhost:3001/songs" + `/${song.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        dispatch({ type: "DELETE_SONG", song })
    }
}