import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video.mp4.mp4';

const Videoplayer = ({ playState, setPlayState }) => {
  const videoContainerRef = useRef(null);

  if (!playState) return null; // 🛑 Don't render if playState is false

  const handleBackgroundClick = (e) => {
    // Close only if clicking outside the actual video element
    if (e.target === videoContainerRef.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className="video-player"
      ref={videoContainerRef}
      onClick={handleBackgroundClick}
    >
      <div className="video-content">
        <video src={video} autoPlay muted controls />
        <button className="close-btn" onClick={() => setPlayState(false)}>✖</button>
      </div>
    </div>
  );
};

export default Videoplayer;













