import React from 'react';

import './VideoList.css';

const VideoSelected = (props) => {
    const video = props.video;
    
    if(!video){
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-content">
        {/* <div className="video-player"> 
                <iframe className="video-player-item" src={url} frameborder="0" gesture="media" allow="autoplay; encrypted-media" allowfullscreen ></iframe>     
          </div>  
        <div className="video-details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>  */}
        <div>
          <div className="video-player">
            <iframe
              className="video-player-item"
              src={url}
              frameBorder="0"
              gesture="media"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-description">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
};

export default VideoSelected;