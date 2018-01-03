import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import Scroll from 'react-scroll';

import Block from '../Block';
import Game from './Game';

import {colors} from '../../theme';
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
        <h1>GAMES</h1>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
          }}
        >
          {gameInfos.map((x, i) => {
            return (
              <article key={i}>
                <Game gameInfo={x} />
              </article>
            );
          })}
        </div>
      </Block>
    </div>
  </Scroll.Element>
);

Games.propTypes = {
  children: PropTypes.node,
};

export default Games;
