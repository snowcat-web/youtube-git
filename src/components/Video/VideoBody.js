import React from 'react';

import VideoList from './VideoList';
import VideoSelected from './VideoSelected';

import './VideoList.css';

const VideoBody = (props) => {

  const addFavorite = (videoId) => {
    props.addFavorite(videoId)
  }

  if (props.videoSelected == null) {
    return (
      <VideoList onVideoSelect={props.onVideoSelect} videos={props.videos} format="grid-video" />
    );
  }
  else {
    return(
      <div className="Selected-container">
        <div><VideoSelected video={props.videoSelected}
                            addFavorite={addFavorite} /></div>
        <div className="listed-videos">
          <VideoList onVideoSelect={props.onVideoSelect}
                      videos={props.videos} 
                      format="list-video"/></div>
      
      </div>
    );

  }    

}

export default VideoBody;