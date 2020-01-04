import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import { Grid } from "react-flexbox-grid";

import "./Block.css";

const blockStyle = css({
  width: "100%"
});

const blockGridStyle = css({
  margin: "0 auto",
  maxWidth: 1280,
  paddingTop: "3rem",
  paddingBottom: "3rem"
});

const Block = ({ children }) => (
  <div {...blockStyle}>
    <Grid fluid {...blockGridStyle}>
      {children}
    </Grid>
  </div>
);

Block.propTypes = {
  children: PropTypes.node
};

export default Block;
