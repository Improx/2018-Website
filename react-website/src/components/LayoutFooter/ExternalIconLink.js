import React from 'react';
import PropTypes from 'prop-types';

import ReactGA from 'react-ga';
import {css} from 'glamor';

import * as FontAwesome from 'react-icons/lib/fa';

import {colors} from '../../theme';

function getIcon(icon) {
  const iconCss = css({
    fill: colors.light,
    ':hover': {fill: colors.yellow},
  });

  const alt = 'Improx Games' + icon;

  switch (icon) {
    case 'twitter':
      return <FontAwesome.FaTwitterSquare alt={alt} size={'100%'} {...iconCss} />;
    case 'facebook':
      return <FontAwesome.FaFacebookSquare alt={alt} size={'100%'} {...iconCss} />;
    case 'email':
      return <FontAwesome.FaEnvelopeSquare alt={alt} size={'100%'} {...iconCss} />;
    case 'instagram':
      return <FontAwesome.FaInstagram alt={alt} size={'100%'} {...iconCss} />;
    default:
      break;
  }
}

const ExternalIconLink = ({children, alt, href, target, rel, icon}) => (
  <a
    {...css({
      width: 40,
      height: 'auto',
      margin: 10,
    })}
    aria-label={alt}
    href={href}
    target={target}
    rel='nofollow noopener noreferrer'
    onClick={() => {
      ReactGA.event({
        category: 'Social',
        action: 'Went to check us out on ' + icon,
      });
    }}
  >
    {getIcon(icon)}
  </a>
);

ExternalIconLink.propTypes = {
  children: PropTypes.node,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

ExternalIconLink.defaultProps = {
  target: '_blank',
  rel: 'nofollow noopener noreferrer',
};

export default ExternalIconLink;
