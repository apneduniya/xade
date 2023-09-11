import React from 'react';
import YouTube from 'react-youtube'; 

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '184',
    width: '320',
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
