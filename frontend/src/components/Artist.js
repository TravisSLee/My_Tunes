import React, { useState } from 'react'
//refactor
const Artist = (props) => {

    const { name } = useState(props)[0]
    return (
        <div>
            <h3>{ name }</h3>
            _______
        </div>
    );
}

export default Artist
