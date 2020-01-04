import React from "react";
import PropTypes from "prop-types";

import { css } from "glamor";

import { colors } from "../../theme";

const missionStyle = css({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: colors.light,
  textAlign: "center"
});

const Centered = ({ children }) => <div {...missionStyle}>{children}</div>;

export default Centered;

Centered.propTypes = {
  children: PropTypes.node.isRequired
};
