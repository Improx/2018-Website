import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import LayoutFooter from '../components/LayoutFooter';
import LayoutHeader from '../components/LayoutHeader';
import LayoutMission from '../components/LayoutMission';
import Games from '../components/Games';
import Team from '../components/Team';

import {colors} from '../theme';

import './index.css';

const TemplateWrapper = ({children}) => (
  <div
    css={{
      backgroundColor: colors.black,
    }}
  >
    <Helmet
      title="Improx Games"
      meta={[
        {
          name: 'description',
          content:
            'Improx Games is a Finnish games company. Our latest game Trimmer Tycoon has been downloaded over 150k times on Steam.',
        },
        {
          name: 'keywords',
          content:
            'games, company, startup, finland, improx, trimmer tycoon, steam',
        },
      ]}
      links={[
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ]}
    />
    <LayoutHeader />
    <LayoutMission />
    <Games />
    <Team />
    <LayoutFooter />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
