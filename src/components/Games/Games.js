import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

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
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat( auto-fill, minmax(350px, 1fr) )',
            justifyContent: 'center',
            gridGap: 15,
            marginLeft: 15,
            marginRight: 15,
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
