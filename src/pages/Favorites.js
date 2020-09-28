import React, {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import VideoBody from '../components/Video/VideoBody';
import { useHistory } from "react-router-dom";

const Favorites = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetchResource();
  }, []);

  const fetchResource = () => {
    const favVideos = localStorage.getItem("favVideos");
    if (favVideos != null) {
      setVideos(JSON.parse(favVideos));
    }

  };

  const handleSearchChange = async (value) => {
    history.push('/');
  };

  const addFavorite = (favorite) => {
    const favVideos = localStorage.getItem("favVideos") ? localStorage.getItem("favVideos") : null;
    let videos = [];
    if (favVideos != null) {
      videos = JSON.parse(favVideos);
    }
    videos.push(favorite)
    localStorage.setItem("favVideos", JSON.stringify(videos));
    setVideos(videos);
  }

  return (
    <div>
        <Navigation onSearchChange={handleSearchChange} />
        <div className="content">
          <VideoBody
            onVideoSelect={(selected) => setSelectedVideo(selected)}
            videos={videos}
            videoSelected={selectedVideo}
            section={'favorites'}
            fetchResource={fetchResource}
            addFavorite={addFavorite}
          />
        </div>
      </div>
    );

}

export default Favorites;