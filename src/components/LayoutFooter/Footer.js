import React from 'react';

import {css} from 'glamor';
import Scroll from 'react-scroll';
import FaCopyright from 'react-icons/lib/fa/copyright';

import {fonts, colors} from '../../theme';
import FooterRow from './FooterRow';
import ExternalIconLink from './ExternalIconLink';

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

const footerStyle = css({
  backgroundColor: colors.black,
  color: colors.light,
  paddingTop: 30,
  paddingBottom: 30,
  fontFamily: fonts.primary,
});

const footerHeaderStyle = css({
  textAlign: 'center',
  margin: 0,
  marginBottom: '0.3em',
  marginTop: '1em',
});

const Footer = () => (
  <Scroll.Element name="contact">
    <div>
      <footer {...footerStyle}>
        <hr {...css({color: colors.yellow})} />
        <h3 {...footerHeaderStyle}>Contact us at:</h3>
        <FooterRow>
          {socialInfo.map((x, i) => {
            return <ExternalIconLink href={x.path} alt={'Improx Games ' + x.icon} icon={x.icon} key={i} />;
          })}
        </FooterRow>
        <br />
        <FooterRow>
          <div {...css({color: colors.grey, fontFamily: fonts.secondary})}>
            <FaCopyright
              color={colors.grey}
              size={'20'}
              viewBox={'0 0 45 45'}
            />
            Improx Games 2018
          </div>
        </FooterRow>
      </footer>
    </div>
  </Scroll.Element>
);

export default Footer;
