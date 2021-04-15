import React, { useState } from 'react'
import { deleteSong } from '../actions';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

//refactor to functional
const Song = (props) => {

    const handleOnClick = () => {
        props.deleteSong(props)
        
    }
    
    const { title, album_title, year_of_release, name, id } = useState(props)[0]
        return (
            <div id={ id }>
                <h3>{ title } - { name }</h3>
                <h3>{ album_title }</h3>
                <h3>{ year_of_release }</h3>
                <Button id="deleteButton" class="btn btn-danger" onClick={ handleOnClick }>Delete</Button><br></br>
                
                ____________________________
            </div>
        )
}

export default  connect(null, { deleteSong })(Song)
