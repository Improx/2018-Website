import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-flexbox-grid';

const Block = ({className, contentClassName, children}) => (
  <Grid
    fluid
    css={{
      width: '80%',
      margin: '0 auto',
      '@media(max-width: 1200px)': {
        width: '80%',
      },
      '@media(max-width: 800px)': {
        width: '90%',
      },
      '@media(max-width: 600px)': {
        width: '99%',
      },
    }}
  >
    {children}
  </Grid>
);

Block.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Block;
