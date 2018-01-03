import React from 'react';

import BackgroundVideo from './BackgroundVideo';
import MissionText from './MissionText';

const Mission = () => (
  <div
    css={{
      position: 'relative',
      padding: 0,
      margin: 0,
    }}
  >
    <BackgroundVideo />
    <MissionText />
  </div>
);

export default Mission;
