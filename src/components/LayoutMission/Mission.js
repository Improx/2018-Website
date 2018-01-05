import React from 'react';

import BackgroundVideo from './BackgroundVideo';
import MissionText from './MissionText';

const Mission = () => (
  <div css={{
    position: "relative"
  }}>
    <BackgroundVideo />
    <MissionText />
  </div>
);

export default Mission;
