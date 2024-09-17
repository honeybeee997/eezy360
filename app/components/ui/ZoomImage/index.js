import React from "react";
import Image from "next/image";

import classes from "./ZoomImage.module.css";

const ZoomImage = ({ src, alt = "Zoom Image" }) => {
  return (
    <div className={classes.zoom_image_wrapper}>
      <Image src={src} alt={alt} width={400} height={480} />
    </div>
  );
};

export default ZoomImage;
