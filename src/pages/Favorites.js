import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import VideoBody from '../components/Video/VideoBody';

const Favorites = () => {
    const[favoriteVids, setFavoriteVids] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const addFavorite = (favorite) => {
        setFavoriteVids(favorite);        
    }

    return (
      <div>
        <Navigation />
        <div className="content">
          <VideoBody
            onVideoSelect={(selected) => setSelectedVideo(selected)}
            videos={favoriteVids}
            videoSelected={selectedVideo}
            addFavorite={addFavorite(favorite)}
          />
        </div>
      </div>
    );

}

export default Favorites;