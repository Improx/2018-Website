import React from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';

import DropdownMenu from './DropdownMenu';
import DesktopMenu from './DesktopMenu';

import logoFull from '../../../assets/icons/improxLogoWhite.png';
import {colors} from '../../theme';
import './Header.css';

const Header = () => (
  <Headroom
    disable
    style={{
      width: '100%',
    }}
    css={{
      '@media screen and (max-width: 750px)': {
        backgroundColor: colors.black,
      },
    }}
  >
    <div className="header-container">
      <Link
        to="/"
        style={{
          color: colors.light,
        }}
        className="logo-container"
      >
        <img src={logoFull} alt="Improx Games" className="logo" />
      </Link>
      <DropdownMenu />
      <DesktopMenu />
    </div>
  </Headroom>
);

export default Header;
