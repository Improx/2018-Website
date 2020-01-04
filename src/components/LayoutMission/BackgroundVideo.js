import React from "react";
import { css } from "glamor";

import { colors } from "../../theme";

import video from "../../assets/videos/improx_loop.mp4";
import poster from "../../assets/videos/poster.webp";

let rule = css({
  position: "absolute",
  right: 0,
  bottom: 0,
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  zIndex: -100,
  filter: "brightness(30%)",
  backgroundColor: colors.black
});

const BackgroundVideo = () => (
  <video width="100%" muted autoPlay playsInline loop poster={poster} {...rule}>
    <source src={video} />
    Your browser has blocked this video.
  </video>
);

export default BackgroundVideo;
