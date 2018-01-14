import React from 'react';

import Scroll from 'react-scroll';

import {colors} from '../../theme';
import FooterRow from './FooterRow';
import ExternalIconLink from './ExternalIconLink';

import tw from '../../../assets/icons/tw.png';
import fb from '../../../assets/icons/fb.png';
import ig from '../../../assets/icons/ig.png';
import email from '../../../assets/icons/email.png';

const socialInfo = [
  {
    path: 'https://twitter.com/improxgames',
    icon: 'twitter',
  },
  {
    path: 'https://facebook.com/improxgames',
    icon: 'facebook',
  },
  {
    path: 'https://instagram.com/improxgames',
    icon: 'instagram',
  },
  {
    path: 'mailto:contact@improxgames.com',
    icon: 'email',
  },
];

const Footer = () => (
  <Scroll.Element name="contact">
    <div>
      <footer
        css={{
          backgroundColor: colors.black,
          color: colors.light,
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <hr css={{color: colors.yellow}} />
        <h3
          css={{
            textAlign: 'center',
            margin: 0,
            marginBottom: '0.3em',
            marginTop: '1em',
          }}
        >
          Contact us at:
        </h3>
        <FooterRow>
          {socialInfo.map((x, i) => {
            // return <ExternalIconLink href={x.path} src={x.icon} key={i} />;
            return <ExternalIconLink href={x.path} icon={x.icon} key={i} />;
          })}
        </FooterRow>
      </footer>
    </div>
  </Scroll.Element>
);

export default Footer;
