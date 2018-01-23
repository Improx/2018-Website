import React from 'react';
import PropTypes from 'prop-types';

import {css} from 'glamor';

import * as FontAwesome from 'react-icons/lib/fa';

import {colors} from '../../theme';

function getIcon(icon) {
  const iconCss = css({
    fill: colors.light,
    ':hover': {fill: colors.yellow},
  });

  switch (icon) {
    case 'twitter':
      return <FontAwesome.FaTwitterSquare size={'100%'} {...iconCss} />;
    case 'facebook':
      return <FontAwesome.FaFacebookSquare size={'100%'} {...iconCss} />;
    case 'email':
      return <FontAwesome.FaEnvelopeSquare size={'100%'} {...iconCss} />;
    case 'instagram':
      return <FontAwesome.FaInstagram size={'100%'} {...iconCss} />;
    default:
      break;
  }
}

const ExternalIconLink = ({children, href, target, rel, icon}) => (
  <a
    {...css({
      width: 40,
      height: 'auto',
      margin: 10,
    })}
    href={href}
    target={target}
    rel={rel}
  >
    {getIcon(icon)}
  </a>
);

ExternalIconLink.propTypes = {
  children: PropTypes.node,
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
