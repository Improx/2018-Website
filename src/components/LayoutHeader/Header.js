import React from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import Scroll from 'react-scroll';

import logoFull from '../../../assets/icons/improxLogoWhite.png';

import {fonts, colors} from '../../theme';
import './Header.css';

const Header = () => (
  <Headroom
    style={{
      background: colors.black,
      width: '100%',
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
      <div className="nav-links">
        <Scroll.Link
          activeClass="active"
          to="games"
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Games
        </Scroll.Link>
        <Scroll.Link
          activeClass="active"
          to="team"
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Team
        </Scroll.Link>
        <Scroll.Link
          activeClass="active"
          to="contact"
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Contact
        </Scroll.Link>
      </div>
    </div>
  </Headroom>
);

export default Header;
