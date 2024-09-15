import React from "react";

const Video = ({ src, className }) => {
  return (
    <video preload="none" autoPlay loop muted className={className}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
