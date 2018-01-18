import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-flexbox-grid';

const Block = ({children}) => (
  <div css={{width: '100%'}}>
    <Grid
      fluid
      css={{
        margin: '0 auto',
        maxWidth: '1280px',
        paddingTop: '3rem',
        paddingBottom: '3rem',
      }}
    >
      {children}
    </Grid>
  </div>
);

Block.propTypes = {
  children: PropTypes.node,
};

export default Block;
