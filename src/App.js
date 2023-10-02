import React from 'react';
import videojs from 'video.js';
import { motion } from "framer-motion";

// This imports the functional component from the previous sample.
import VideoJS from './VideoJS'

const App = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,

    sources: [{
      src: 'https://s3.nexusit.ru/files/bfd34045-4748-4fdf-aa0a-85c54bd2b656.MP4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <div style={{ width: "100%", height: "100%"}}>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;
