import React from "react";

import { css } from "glamor";
import Scroll from "react-scroll";
import FaAngleDown from "react-icons/lib/fa/angle-down";

import LayoutHeader from "../LayoutHeader";
import BackgroundVideo from "./BackgroundVideo";
import cubePromo from "../../assets/videos/cubePromo.mp4";
import cubePromoThumb from "../../assets/videos/poster.jpg";

import { colors } from "../../theme";

const arrowStyle = css({
  margin: "auto",
  textTransform: "uppercase",
  letterSpacing: 3,
  textAlign: "center",
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.5,
  ":hover": {
    fill: colors.yellow
  }
});

const Mission = () => (
  <div {...css({ position: "relative", minHeight: "45vh" })}>
    <LayoutHeader />
    <BackgroundVideo
      videoFile={cubePromo}
      thumbnail={cubePromoThumb}
      brightness={100}
    />
    <Scroll.Link
      activeClass="active"
      to="cube"
      spy
      smooth
      duration={500}
      {...css({ cursor: "pointer" })}
    >
      <FaAngleDown color={colors.light} size={"5em"} {...arrowStyle} />
    </Scroll.Link>
  </div>
);

export default Mission;
