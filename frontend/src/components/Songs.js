import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../components/Song';
import SongSearch from '../components/SongSearch';


class Songs extends Component {
  
  filterSongs = (props) => {
    if ( this.props.query === '' || this.props.query === undefined ){
      
      return this.props.songs
    } else {
      return this.props.songs.filter((song) => {
        const songTitle = song.title.toLowerCase();
        return songTitle.includes(this.props.query);
      })
    };
  }
  
  
  renderSongs = (props) => {
    return this.filterSongs().map( (song, i) =>  
        <Song key={i} 
        id = {song.id}
        title={song.title}
        album_title={song.album_title}
        year_of_release={song.year_of_release}
        name={song.artist.name}
        />)
  }
  render() {
        return (
            <div>
                <SongSearch filterSongs={ this.filterSongs }/>
                { this.renderSongs() }
            </div>
        )
    }
}

const mapStateToProps = state => {
  console.log(state)
    return {
      songs: state.songsReducer.songs,
      query: state.searchReducer.query
    }
  }

export default connect(mapStateToProps)(Songs)