import React, { useState } from 'react'
import { deleteSong } from '../actions';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

//refactor to functional
const Song = (props) => {

    const handleOnClick = () => {
        props.deleteSong(props)
    }
    
        return (
            <div id={ props.id }>
                <h3>{ props.title } - { props.name }</h3>
                <h3>{ props.album_title }</h3>
                <h3>{ props.year_of_release }</h3>
                <Button id="deleteButton" class="btn btn-danger" onClick={ handleOnClick }>Delete</Button><br></br>
                
                ____________________________
            </div>
        )
}

export default  connect(null, { deleteSong })(Song)
