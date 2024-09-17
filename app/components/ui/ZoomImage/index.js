import React from "react";

import classes from "./ZoomImage.module.css";

const ZoomImage = ({ src }) => {
  return (
    <div className={classes.zoom_image_wrapper}>
      <img src={src} />
    </div>
  );
};

export default ZoomImage;
