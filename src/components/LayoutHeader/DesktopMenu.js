import React from 'react';
import Scroll from 'react-scroll';
import {fonts, colors} from '../../theme';

const menuItemStyle = {
  cursor: 'pointer',
  ':hover': {
    color: colors.yellow,
    borderColor: colors.yellow,
  },
  fontFamily: fonts.primary
};

export default class DesktopMenu extends React.Component {
  render() {
    return (
      <div className="nav-links" css={{color: colors.light}}>
        <Scroll.Link
          activeClass="active"
          to="games"
          spy
          smooth
          duration={500}
          className="nav-link"
          css={menuItemStyle}
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
          css={menuItemStyle}
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
          css={menuItemStyle}
        >
          Contact
        </Scroll.Link>
      </div>
    );
  }
}
