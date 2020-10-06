var favoritePresent = function(videoId) {
    const favVideos = localStorage.getItem("favVideos") ? localStorage.getItem("favVideos") : null;

    let videos = [];
    if (favVideos != null) {
       videos = JSON.parse(favVideos);
    }
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].id.videoId === videoId) {         
        return true;
      }       
    }      
    return false;
    
  };

exports.favoritePresent = favoritePresent;