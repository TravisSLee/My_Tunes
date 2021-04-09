import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from './Song'

class Index extends Component {
    render() {
        const songs = this.props.songs.map( (song, i) => <Song key={i} 
        title={song.title}
        album_title={song.album_title}
        year_of_release={song.year_of_release}
        name={song.artist.name}
        />)
        return (
            <div>
                { songs }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      songs: state.songs
    }
  }

export default connect(mapStateToProps)(Index)
