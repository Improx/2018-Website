import React from 'react';

import {colors} from '../../theme';
import ExternalFooterLink from './ExternalFooterLink';

import tw from '../../../assets/icons/tw.png';

const Footer = () => (
    <footer css={{
        backgroundColor: colors.black,
        color: colors.light,
        paddingTop: 10,
        paddingBottom: 50,
    }}>
        <p>Home</p>
        <ExternalFooterLink
        href="https://twitter.com/improxgames"
        target="_blank"
        rel="noopener">
            <img src={tw} css={{
                width: 50,
                height: 'auto',
            }}></img>
        </ExternalFooterLink>
    </footer>
);

export default Footer;
