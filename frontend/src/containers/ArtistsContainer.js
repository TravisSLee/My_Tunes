import React, { Component } from 'react';
import Artists from '../components/Artists';
import Container from 'react-bootstrap/Container';

class ArtistsContainer extends Component {
    render() {
        return (
            <div>
                <Container className="artistsContainer">
                    <Artists />
                </Container>
                
            </div>
        )
    }
}

export default ArtistsContainer;
