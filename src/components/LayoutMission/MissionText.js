import React from 'react';

import {colors} from '../../theme';

const MissionText = () => (
  <div
    css={{
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.light,
      lineHeight: "2em"
    }}
  >
    <h1 css={{textAlign: "center"}}>We create unique games that we ourselves want to play.</h1>
  </div>
);

export default MissionText;
