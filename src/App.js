import "./App.css";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SideNav from "./components/SideNav/sideNav";
import Backdrop from "./components/Backdrop/Backdrop";
import YTSearch from "./components/YoutubeSearch";
import VideoList from "./components/Video/VideoList";
import VideoBody from "./components/Video/VideoBody";
import Navigation from "./components/Navigation";
import { Route } from 'react-router';

import Favorites from "./components/Favorites/Favorites";
//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "AIzaSyB-YiVwk4DoZ-K4NjLcayTWYG7OGZZ9DxE";

const App = () => { 
  const [videos, setVideos] = useState([]);
  const [sldVideo, setSldVideo] = useState(null);

  useEffect(() => {
    fetchResource("kittens");
  }, []);

  const useShareableState = () => {
    const [username, setUsername] = useState('Abrar');
    const [count, setCount] = useState(0);
    return {
      username,
      setUsername,
      count,
      setCount
    }
  }

  const fetchResource = async (item) => {
    await YTSearch(
      { key: API_KEY, term: item, params: { maxResults: 20 } },
      (data) => {
        console.log(data);
        setVideos(data);
      }
    );
  };

  return (
    <div>      
      <Navigation />
      <div className="content">        
        <VideoBody
        onVideoSelect={selected => setSldVideo(selected)}
        videos={videos}
        videoSelected = {sldVideo}
        />
      </div>
    </div>
  );
};

export default App;
