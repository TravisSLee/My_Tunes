import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSong } from '../actions';

class Form extends Component {
    state = {
        title: "",
        album_title: "",
        year_of_release: "",
        artist: ""
    }

    handleChange = e => {
        console.log("Hi")
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props)
        this.props.addSong(this.state, this.props.history);
    }

    render() {
        console.log(this.state.artist)
        return (
            <div>
                <h3>Create a Song</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" value={ this.state.title} onChange={ this.handleChange}/>  
                    </div>
                    <div>
                        <label htmlFor="albumTitle">Album Title:</label>
                        <input type="text" id="albumTitle" name="album_title" value={ this.state.album_title } onChange={ this.handleChange}/> 
                    </div>
                    <div>
                        <label htmlFor="yearOfRelease">Year of Release:</label>
                        <input type="text" id="yearOfRelease" name="year_of_release" value={ this.state.year_of_release } onChange={ this.handleChange}/> 
                    </div>
                    <div>
                        <label htmlFor="name">Artist Name:</label>
                        <input type="text" id="name" name="artist" value={ this.state.artist } onChange={ this.handleChange } /> 
                    </div>
                    <input type="submit" value="Create Song"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addSong })(Form)
