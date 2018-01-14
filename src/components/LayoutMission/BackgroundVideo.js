import React from 'react';
import {css} from 'glamor';

import video from '../../../assets/videos/improx_loop.mp4';

let rule = css({
  verticalAlign: 'middle',
  height: 'auto',
  maxWidth: '100%',
  filter: 'brightness(30%)',
});

const BackgroundVideo = () => (
  <video width="100%" muted autoPlay playsInline loop {...rule}>
    <source src={video} />
  </video>
);

export default BackgroundVideo;
