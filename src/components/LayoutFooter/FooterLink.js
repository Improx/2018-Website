import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

const FooterLink = ({children, target, to}) => (
  <a
    css={{
      lineHeight: 2,
      ':hover': {
        color: colors.yellow,
      },
    }}
    href={to}
    target={target}
  >
    {children}
  </a>
);

FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default FooterLink;
