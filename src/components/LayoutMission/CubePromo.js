import React from "react";

import { css } from "glamor";
import Scroll from "react-scroll";
import FaAngleDown from "react-icons/lib/fa/angle-down";

import LayoutHeader from "../LayoutHeader";
import BackgroundVideo from "./BackgroundVideo";
import Centered from "./MissionText";
import cubePromo from "../../assets/videos/cubePromo.mp4";
import cubePromoThumb from "../../assets/videos/poster.jpg";

import { colors, fonts } from "../../theme";

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

const cubeHeaderStyle = css({
  fontFamily: fonts.primary,
  fontSize: "5em",
  display: "block",
  margin: 0
});

const subHeaderStyle = css({
  fontSize: "2em",
  margin: 0
});

const Mission = () => (
  <div {...css({ position: "relative", minHeight: "75vh" })}>
    <LayoutHeader />
    <BackgroundVideo
      videoFile={cubePromo}
      thumbnail={cubePromoThumb}
      brightness={100}
    />
    <Centered>
      <h2 {...subHeaderStyle}>Announcing:</h2>
      <h1 {...cubeHeaderStyle} {...cubeHeaderStyle}>
        THE LAST CUBE
      </h1>
    </Centered>
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
