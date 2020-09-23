import React, {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import VideoBody from '../components/Video/VideoBody';
import YTSearch from "../components/YoutubeSearch";

const Favorites = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchResource();
    }, []);

    const fetchResource = () => {
        const favVideos = localStorage.getItem("favVideos");
        console.log(favVideos)
    };

    return (
      <div>
        <Navigation />
        <div className="content">
          <VideoBody
            onVideoSelect={(selected) => setSelectedVideo(selected)}
            videos={videos}
            videoSelected={selectedVideo}
          />
        </div>
      </div>
    );

}

export default Favorites;