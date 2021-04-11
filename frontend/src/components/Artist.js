import React, { Component } from 'react'

class Artist extends Component {
    render() {
        const { name } = this.props
        return (
            <div>
                <h3>{ name }</h3>
                _______
            </div>
        )
    }
}

export default Artist
