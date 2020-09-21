import React, { useState, useEffect } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideNav from "./SideNav/sideNav";
import Backdrop from "./Backdrop/Backdrop";
import YTSearch from "./YoutubeSearch";

//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "AIzaSyB-YiVwk4DoZ-K4NjLcayTWYG7OGZZ9DxE";

const Navigation = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [sldVideo, setSldVideo] = useState(null);

  useEffect(() => {
    fetchResource("kittens");
  }, []);

  const fetchResource = async (item) => {
    await YTSearch(
      { key: API_KEY, term: item, params: { maxResults: 20 } },
      (data) => {
        console.log(data);
        setVideos(data);
      }
    );
  };

   var sideNavOpenHandler = () => {
     setSideNavOpen(!sideNavOpen);
     return false;
   };

   var sideNavCloseHandler = () => {
     setSideNavOpen(false);
   };

  var backdrop = null;

  if (sideNavOpen) {
     //sideNav = <SideNav />;
     backdrop = <Backdrop click={sideNavCloseHandler} />;
  }

  return (
    <div>
      <Toolbar sideNavOpenHandler={sideNavOpenHandler}
      onSearchTermChange={searchTerm => fetchResource(searchTerm)}  />
      <SideNav show={sideNavOpen} />
      {backdrop}
      </div>    
  );
};

export default Navigation;