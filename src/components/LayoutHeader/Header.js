import React from 'react';
import Link from 'gatsby-link';

import {colors} from '../../theme';

const Header = () => (
    <div
      style={{
        background: colors.black,
        position: 'fixed',
        width: '100%',
        zIndex: 1
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{margin: 0}}>
          <Link
            to="/"
            style={{
              color: colors.light,
              textDecoration: 'none',
            }}
          >
            Improx Games
          </Link>
        </h1>
      </div>
    </div>
  );

  export default Header;
