import React, { useState } from 'react';
import {LoginStatus} from '../Login/LoginStatus';
import {favoritePresent} from './VideoUtils';
import './VideoList.css';

const VideoSelected = (props) => {
    let userData = null;
    if(props.logged !== undefined) {
        userData = props.logged;
    }
    else{
        userData = LoginStatus();
    }
    const [favorite, setFavorite] = useState();
    
    const video = props.video;
    if(!video){
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    const handleClick = () => {
      props.addFavorite(video);      
    };

    const handleClickRemove = () => {
      const favVideos = localStorage.getItem("favVideos") ? localStorage.getItem("favVideos") : null;

      let videos = [];
      if (favVideos != null) {
         videos = JSON.parse(favVideos);
      }
      for (let i = 0; i < videos.length; i++) {
        if (videos[i].id.videoId === videoId){
          videos.splice(i, 1);
        }
      }
      localStorage.setItem("favVideos", JSON.stringify(videos));
      if(props.section==="favorites"){
        props.fetchResource();
      }
      else{
        setFavorite(!favorite);
      }
    };

    return (
      <div className="video-content">
        <div>
          <div className="video-player">
            <iframe
              title="video player"
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
          <div>
            {" "}
            <h3> {video.snippet.title} </h3>{" "}
          </div>
          <div>{video.snippet.description}</div>
          {userData!=null &&
          <div className="favorite-position">
            {" "}
            {favoritePresent(videoId) ?
            <button className="favorite-button" onClick={handleClickRemove}>
              Remove from favorites
            </button> :
            <button className="favorite-button" onClick={handleClick}>
             Add to favorites
          </button>
             }
          </div> }
        </div>
      </div>
    );
};

export default VideoSelected;