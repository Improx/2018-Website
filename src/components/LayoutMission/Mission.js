import React from 'react';

import Scroll from 'react-scroll';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

import LayoutHeader from '../LayoutHeader';
import BackgroundVideo from './BackgroundVideo';
import MissionText from './MissionText';

import {colors} from '../../theme';

const Mission = () => (
  <div
    css={{
      position: 'relative',
      minHeight: '100vh',
    }}
  >
    <LayoutHeader />
    <BackgroundVideo />
    <MissionText />
    <Scroll.Link
      activeClass="active"
      to="games"
      spy
      smooth
      duration={500}
      css={{cursor: 'pointer'}}
    >
      <FaAngleDown
        color={colors.light}
        size={'5em'}
        css={{
          margin: 'auto',
          textTransform: 'uppercase',
          letterSpacing: 3,
          textAlign: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.5,
          ':hover': {
            fill: colors.yellow,
          },
        }}
      />
    </Scroll.Link>
  </div>
);

export default Mission;
