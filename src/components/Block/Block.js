import React from 'react';
import PropTypes from 'prop-types';

const Block = ({className, contentClassName, children}) => (
  <div>{children}</div>
);

Block.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Block;
