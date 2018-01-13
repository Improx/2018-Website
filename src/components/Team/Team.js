import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

import Block from '../Block';
import Dude from './dude';

import {fonts, colors} from '../../theme';
import dudeInfos from './dudeInfos';

const Team = () => (
  <Scroll.Element name="team">
    <div
      css={{
        backgroundColor: colors.black,
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 3,
      }}
    >
      <Block>
        <h1
          css={{
            fontFamily: fonts.primary,
            color: colors.light,
            textAlign: 'center',
          }}
        >
          THE TEAM
        </h1>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat( auto-fit, minmax(220px, 1fr) )',
            gridGap: 15,
            width: '65%',
            margin: '0 auto',
            gridAutoColumns: 0,
            justifyContent: 'space-evenly',
            '@media(max-width: 600px)': {
              gridTemplateColumns: 'repeat( auto-fit, minmax(200px, 1fr) )',
            },
            '@media(max-width: 800px)': {
              width: '90%',
            },
          }}
        >
          {dudeInfos.map((x, i) => {
            return <Dude dudeInfo={x} key={i} />;
          })}
        </div>
      </Block>
    </div>
  </Scroll.Element>
);

Team.propTypes = {
  children: PropTypes.node,
};

export default Team;
