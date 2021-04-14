import React, { Component } from 'react';
import { connect } from 'react-redux';
import Artist from './Artist';

class Artists extends Component {
    render() {
        const artists =  this.props.artists.map( (artist, i) => <Artist key={i} 
        id = {artist.id}
        name={artist.name}
        />)
        return (
            <div>
                { artists }
            </div>
        )

    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
      artists: state.artistsReducer.artists
    }
  }

export default connect(mapStateToProps)(Artists)
