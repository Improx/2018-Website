import React from 'react';
import PropTypes from 'prop-types';

import {css} from 'glamor';

const FooterRow = ({children}) => (
  <div
    {...css({
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    })}
  >
    {children}
  </div>
);

FooterRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterRow;
