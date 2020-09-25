import React, { useState, useEffect } from "react";

import "./Toolbar.css";
import SideNavButton from "../SideNav/sideNavButton";

const Toolbar = (props) => {
  
  const onInputChange = (event) => {
    if (event.key === "Enter") {
        props.onSearchChange(event.target.value);
    }    
  };

  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div>
          <SideNavButton click={props.sideNavOpenHandler} />
        </div>
        <div className="toolbar_navigation_header">          
        </div>
        <div>
          {/* <SearchBox /> */}
          <div className="search-bar">
            <input
                onKeyPress = {onInputChange}
                placeholder= {props.placeholder}
            />
          </div>
        </div>
        <div className="needSomeSpace" />
        <div className="toolbar_navigation_links">
          <ul>
            <li>
              <a href="/">Perfil</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
