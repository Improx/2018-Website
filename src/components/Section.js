import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../theme';

const Section = ({children}) => (
    <div>
        {children}
    </div>
);

Section.propTypes = {
    children: PropTypes.node,
};

export default Section;
