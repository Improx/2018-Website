import React from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';

import {colors} from '../../theme';

const Header = () => (
    <Headroom
      style={{
        background: colors.black,
        width: '100%',
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
    </Headroom>
  );

  export default Header;
