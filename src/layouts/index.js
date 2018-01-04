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
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
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
