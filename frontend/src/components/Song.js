import React, { Component } from 'react'

class Song extends Component {
    render() {
        console.log(this.props)
        const { title, album_title, year_of_release, name } = this.props;
        return (
            <div>
                <h3>{ title }</h3>
                <h3>{ album_title }</h3>
                <h3>{ year_of_release }</h3>
                <h3>{ name }</h3>
            </div>
        )
    }
}

export default Song
