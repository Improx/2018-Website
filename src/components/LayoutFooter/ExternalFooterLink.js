'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

const ExternalFooterLink = ({children, href, target, rel}) => (
    <a
        css={{
            lineHeight: 2,
            ':hover': {
                color: colors.yellow,
            },
        }}
        href={href}
        target={target}
        rel={rel}>
        {children}
    </a>
);

ExternalFooterLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    rel: PropTypes.string.isRequired,
};

export default ExternalFooterLink;
