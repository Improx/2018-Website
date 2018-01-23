import React from 'react';

import {css} from 'glamor';

import {fonts, colors} from '../../theme';

const missionStyle = css({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.light,
  lineHeight: '2em',
});

const MissionText = () => (
  <div {...missionStyle}>
    <h1 {...css({textAlign: 'center', fontFamily: fonts.primary})}>
      We create unique games that we ourselves want to play.
    </h1>
  </div>
);

export default MissionText;
