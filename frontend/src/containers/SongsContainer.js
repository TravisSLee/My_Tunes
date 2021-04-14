import React, { Component } from 'react';
import Songs from '../components/Songs';
import Container from 'react-bootstrap/Container';

class SongsContainer extends Component {
    render() {
        return (
            <div>
                <Container className="songContainer">
                    <h1>Here's The List of Your Songs!</h1>
                    <Songs />
                </Container>
            </div>
        )
    }
}


export default SongsContainer;
