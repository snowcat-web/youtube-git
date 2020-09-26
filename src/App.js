/*import "./App.css";
import React, { useState, useEffect } from "react";
import YTSearch from "./components/YoutubeSearch";
import VideoBody from "./components/Video/VideoBody";
import Navigation from "./components/Navigation";

const API_KEY = "AIzaSyB-YiVwk4DoZ-K4NjLcayTWYG7OGZZ9DxE";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        fetchResource("kittens");
    }, []);

    const fetchResource = async (item) => {
        await YTSearch(
            { key: API_KEY, term: item },
            (data) => {
                setVideos(data);
            }
        );
    };

    const handleSearchChange = async(value) => {
        await fetchResource(value)
    };
    return (
    <div>      
      <Navigation onSearchChange={handleSearchChange}/>
      <div className="content">        
        <VideoBody onVideoSelect={selected => setSelectedVideo(selected)}
                                videos={videos}
                                videoSelected = {selectedVideo} />
      </div>
    </div>
  );
};

export default App;*/
import './App.css';
import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path = '/' exact component={Home} />
                <Route path = '/favorites' component={Favorites} />
                <Route path = '/login' component={Login} />
            </Switch>
        </Router>
        
    );
}

export default App;
