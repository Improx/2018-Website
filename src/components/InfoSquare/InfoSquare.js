import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

const InfoSquare = ({children}) => (

    <div css={{
        backgroundColor: colors.black,
        color: colors.light,
        paddingTop: 30,
        paddingBottom: 30,
    }}>
    {children}
    </div>
);

InfoSquare.propTypes = {
    children: PropTypes.node,
};

export default InfoSquare;
