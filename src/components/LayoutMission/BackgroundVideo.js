import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

import { colors } from "../../theme";

let rule = css({
  position: "absolute",
  right: 0,
  bottom: 0,
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  zIndex: -100,
  backgroundColor: colors.black
});

const BackgroundVideo = ({ videoFile, thumbnail, brightness = 30 }) => (
  <video
    width="100%"
    muted
    autoPlay
    playsInline
    loop
    poster={thumbnail}
    {...rule}
    {...css({ filter: `brightness(${brightness}%)` })}
  >
    <source src={videoFile} />
    Your browser has blocked this video.
  </video>
);

export default BackgroundVideo;

BackgroundVideo.propTypes = {
  videoFile: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  brightness: PropTypes.number
};
