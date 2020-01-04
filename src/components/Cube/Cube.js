import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import Scroll from "react-scroll";

import { colors } from "../../theme";

import Block from "../Block";

const CubePromo = () => (
  <Scroll.Element name="cube">
    <div {...css({ backgroundColor: colors.light })}>
      <Block>cube</Block>
    </div>
  </Scroll.Element>
);

CubePromo.propTypes = {
  children: PropTypes.node
};

export default CubePromo;
