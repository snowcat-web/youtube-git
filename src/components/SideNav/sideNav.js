import React from 'react';
import { Link } from 'react-router-dom';

import './sideNav.css';

const sideNav = props => {
    var navBarClasses = 'side-nav';
    if (props.show) {
        navBarClasses = 'side-nav open';
    }
    return (
        <nav className={navBarClasses}>
        <ul>
            <li><Link to="/"> Videos </Link> </li>
            <li> <Link to= "/favorites"> Favorites </Link>  </li>
        </ul>
    </nav>

    );

};
    
export default sideNav