import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

import Block from '../Block';
import Dude from './dude';

import {colors} from '../../theme';
import dudeInfos from './dudeInfos';

const Team = () => (
  <Scroll.Element name="team">
    <div
      css={{
        backgroundColor: colors.light,
        color: colors.black,
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 30
      }}
    >
      <Block>


        <h2 css={{ textAlign: "center" }}>TEAM</h2>

        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
          }}
        >
          {dudeInfos.map((x, i) => {
            return (
                <Dude dudeInfo={x} />
            );
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
