'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

const ExternalIconLink = ({children, href, target, rel, src}) => (
    <a css={{
        width: 40,
        height: 'auto',
        margin: 10,
    }}
    href={href}
    target={target}
    rel={rel}>
        {children}
        <img css={{
            ':hover': {
                color: colors.yellow,
            },
        }}
        src={src}>
        </img>
    </a>
);

ExternalIconLink.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    rel: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

ExternalIconLink.defaultProps = {
    target: '_blank',
    rel: 'noopener',
};

export default ExternalIconLink;
