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
        backgroundColor: colors.light,
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 3,
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
          THE TEAM
        </h1>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat( auto-fit, minmax(350px, 1fr) )',
            gridGap: 15,
            marginLeft: 15,
            marginRight: 15,
            gridAutoColumns: 0,
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
