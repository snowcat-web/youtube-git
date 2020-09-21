import "./App.css";
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
            { key: API_KEY, term: item, params: { maxResults: 20 } },
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

export default App;
