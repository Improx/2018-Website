import React from 'react';
import Headroom from 'react-headroom';

import DropdownMenu from './DropdownMenu';
import DesktopMenu from './DesktopMenu';

import logoFull from '../../assets/icons/improxLogoWhite.png';
import {colors} from '../../theme';
import './Header.css';

const Header = () => (
  <Headroom
    disable
    style={{
      width: '100%',
    }}
  >
    <div className="header-container">
      <a
        href="/"
        style={{
          color: colors.light,
        }}
        className="logo-container"
      >
        <img src={logoFull} alt="Improx Games" className="logo" />
      </a>
      <DropdownMenu />
      <DesktopMenu />
    </div>
  </Headroom>
);

export default Header;
