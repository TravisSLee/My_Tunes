import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../components/Song';

class Songs extends Component {
    render() {
        const songs = this.props.songs.map( (song, i) => <Song key={i} 
        id = {song.id}
        title={song.title}
        album_title={song.album_title}
        year_of_release={song.year_of_release}
        name={song.artist.name}
        />)
        return (
            <div className="container">
                <h1>Here's The List of Your Songs!</h1>
                { songs }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      songs: state.songsReducer.songs
    }
  }

export default connect(mapStateToProps)(Songs)
