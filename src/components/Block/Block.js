import React from 'react';
import {Grid} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

const Block = ({className, contentClassName, children}) => (
    <div>
        <Grid fluid>
            {children}
        </Grid>
    </div>
);

Block.propTypes = {
className: PropTypes.string,
contentClassName: PropTypes.string,
children: PropTypes.node,
};

export default Block;
