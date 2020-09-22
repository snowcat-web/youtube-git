import React from "react";
import "./VideoList.css";

const VideoListItem = (props) => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  console.log("lista");
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onUserSelected(video)}>    
      {/* <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="video-body">
          <div className="video-body-title">
            <h3>{video.snippet.title}</h3>
          </div>
        </div>
        <div>{video.snippet.description}</div>
      </div> */}
      <div className="list-item-container">
        <div>
        <img className="media-object" src={imageUrl}   />
        </div>
        <div>
        <span style={{ fontWeight: 'bold' }}> {video.snippet.title} </span> 
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
