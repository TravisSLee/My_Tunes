import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
               <ul>
                   <li><Link to="/" >Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/songs">Your List of Songs</Link></li>
                   <li><Link to="/artists">Your List of Artists</Link></li>
                   <li><Link to="/songs/new">New Song</Link></li>
                   <li><Link to="/silly">Silly Link</Link></li>
               </ul>
            </div>
        )
    }
}

export default Nav
