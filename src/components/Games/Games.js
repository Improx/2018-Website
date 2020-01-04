import React from "react";
import PropTypes from "prop-types";
import Scroll from "react-scroll";
import { Row, Col } from "react-flexbox-grid";
import { css } from "glamor";

import Block from "../Block";
import Game from "./Game";

import { fonts, colors } from "../../theme";
import gameInfos from "./gameInfos";

const blockHeaderStyle = css({
  fontFamily: fonts.primary,
  color: colors.black,
  textAlign: "center"
});

const gameColStyle = css({
  marginTop: "0.2em",
  marginBottom: "0.2em"
});

const Games = () => (
  <Scroll.Element name="games">
    <div {...css({ backgroundColor: colors.light })}>
      <Block>
        <h1 {...blockHeaderStyle}>OTHER GAMES</h1>
        <Row height={2} center="xs">
          {gameInfos.map((x, i) => {
            return (
              <Col xs={12} sm={6} md={4} lg={4} key={i} {...gameColStyle}>
                <Game gameInfo={x} />
              </Col>
            );
          })}
        </Row>
      </Block>
    </div>
  </Scroll.Element>
);

Games.propTypes = {
  children: PropTypes.node
};

export default Games;
