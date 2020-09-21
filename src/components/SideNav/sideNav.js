import React from 'react';

import './sideNav.css';

const sideNav = props => {
    var navBarClasses = 'side-nav';
    if (props.show) {
        navBarClasses = 'side-nav open';
    }
    return (
        <nav className={navBarClasses}>
        <ul>
            <li><a href="/"> Videos</a></li>
            <li> <a href="/favorites"> Favorites</a></li>
        </ul>
    </nav>

    );

};
    


export default sideNav