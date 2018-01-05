import React from 'react';
import {css} from 'glamor';

import video from '../../../assets/videos/junction.mp4';

let rule = css({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  filter: 'brightness(30%)',
  marginBottom: '-2%',
});

const BackgroundVideo = () => (
  <video muted autoPlay playsInline loop {...rule}>
    <source src={video} />
  </video>
);

export default BackgroundVideo;
