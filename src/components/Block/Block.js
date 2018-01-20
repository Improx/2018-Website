import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-flexbox-grid';

import './Block.css';

const Block = ({children}) => (
  <div css={{width: '100%'}}>
    <Grid fluid className="block-grid">
      {children}
    </Grid>
  </div>
);

Block.propTypes = {
  children: PropTypes.node,
};

export default Block;
