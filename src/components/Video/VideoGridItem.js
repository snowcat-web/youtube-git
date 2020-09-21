import React from "react";
import "./VideoList.css";

const VideoGridItem = (props) => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.medium.url;

  return (
    <li onClick={() => onUserSelected(video)} className="list-group-item">    
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="video-body">
          <div className="video-body-title">
            <h3>{video.snippet.title}</h3>
          </div>
        </div>
        <div>{video.snippet.description}</div>
      </div>
    </li>
  );
};

export default VideoGridItem;
