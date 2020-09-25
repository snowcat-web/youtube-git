import React, {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import VideoBody from '../components/Video/VideoBody';

const Favorites = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchResource();
    }, []);

    const fetchResource = () => {
        const favVideos = localStorage.getItem("favVideos");
        if(favVideos!=null){
          console.log(JSON.parse(favVideos));
          setVideos(JSON.parse(favVideos));
        }
        
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