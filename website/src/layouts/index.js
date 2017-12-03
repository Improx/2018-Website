import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import LayoutFooter from '../components/LayoutFooter';
import LayoutHeader from '../components/LayoutHeader';

import {colors} from '../theme';

import './index.css';

const TemplateWrapper = ({children}) => (
  <div css={{
    backgroundColor: colors.grey,
  }}>
    <Helmet
      title="Improx Games"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <LayoutHeader />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <LayoutFooter />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
