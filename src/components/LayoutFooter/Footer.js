import React from 'react';

import {colors} from '../../theme';
import FooterRow from './FooterRow';
import ExternalIconLink from './ExternalIconLink';

import tw from '../../../assets/icons/tw.png';
import fb from '../../../assets/icons/fb.png';
import ig from '../../../assets/icons/ig.png';

const socialInfo = [
  {
    path: 'https://twitter.com/improxgames',
    icon: tw,
  },
  {
    path: 'https://facebook.com/improxgames',
    icon: fb,
  },
  {
    path: 'https://instagram.com/improxgames',
    icon: ig,
  },
];

const Footer = () => (
  <div>
    <hr css={{backgroundColor: colors.yellow}} />
    <footer
      css={{
        backgroundColor: colors.black,
        color: colors.light,
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <FooterRow>
        {socialInfo.map((x, i) => {
          return <ExternalIconLink href={x.path} src={x.icon} key={i} />;
        })}
      </FooterRow>
    </footer>
  </div>
);

export default Footer;
