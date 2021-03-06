import React from 'react';
import PropTypes from 'prop-types';

const ExternalFooterLink = ({children, href, target, rel}) => (
  <a
    href={href}
    target={target}
    rel={rel}
    css={{width: '10%', height: '100px'}}
  >
    {children}
  </a>
);

ExternalFooterLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string.isRequired,
};

ExternalFooterLink.defaultProps = {
  href: '_blank',
  rel: 'noopener',
};

export default ExternalFooterLink;
