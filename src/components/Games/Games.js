import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import {Row, Col} from 'react-flexbox-grid';

import Block from '../Block';
import Game from './Game';

import {fonts, colors} from '../../theme';
import gameInfos from './gameInfos';

const Games = () => (
  <Scroll.Element name="games">
    <div
      css={{
        backgroundColor: colors.light,
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Block>
        <h1
          css={{
            fontFamily: fonts.primary,
            color: colors.black,
            textAlign: 'center',
          }}
        >
          GAMES
        </h1>
        <Row height={2} center="xs">
          {gameInfos.map((x, i) => {
            return (
              <Col xs={12} sm={6} md={4} lg={4} key={i}>
                <Game gameInfo={x} />
              </Col>
            );
          })}
        </Row>
        {/* </div> */}
      </Block>
    </div>
  </Scroll.Element>
);

Games.propTypes = {
  children: PropTypes.node,
};

export default Games;
