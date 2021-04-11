import React, { Component } from 'react'
import { deleteSong } from '../actions';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';


class Song extends Component {

    handleOnClick = () => {
        this.props.deleteSong(this.props)
        
    }
    render() {
        console.log(this.props)
        const { title, album_title, year_of_release, name, id } = this.props;
        return (
            <div id={ id }>
                <h3>{ title } - { name }</h3>
                <h3>{ album_title }</h3>
                <h3>{ year_of_release }</h3>
                <Button id="deleteButton" onClick={ this.handleOnClick }>Delete</Button><br></br>
                
                ____________________________
            </div>
        )
    }
}

export default  connect(null, { deleteSong })(Song)
