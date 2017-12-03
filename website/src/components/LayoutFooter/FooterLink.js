'use strict';

import Link from 'gatsby-link';
import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

const FooterLink = ({children, target, to}) => (
    <Link
        css={{
            lineHeight: 2,
            ':hover': {
                color: colors.yellow,
            },
        }}
        to={to}
        target={target}>
        {children}
    </Link>
);

FooterLink.propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
};

export default FooterLink;
