import React from 'react';
import Scroll from 'react-scroll';
import {css} from 'glamor';
import {fonts, colors} from '../../theme';

const navLinksStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '1.3rem',
  color: colors.light,
  '@media screen and (max-width: 750px)': {
    display: 'none',
  },
});

const menuItemStyle = css({
  cursor: 'pointer',
  margin: 8,
  marginRight: '1rem',
  fontSize: '1.5rem',
  fontFamily: fonts.primary,
  '@media screen and (max-width: 750px)': {
    fontSize: '1.1rem',
    borderStyle: 'solid',
    borderColor: colors.light,
    borderWidth: 2,
  },
  ':hover': {
    color: colors.yellow,
    borderColor: colors.yellow,
  },
});

export default class DesktopMenu extends React.Component {
  render() {
    return (
      <div {...navLinksStyle}>
        <Scroll.Link
          activeClass="active"
          to="games"
          spy
          smooth
          duration={500}
          {...menuItemStyle}
        >
          Games
        </Scroll.Link>
        <Scroll.Link
          activeClass="active"
          to="team"
          spy
          smooth
          duration={500}
          {...menuItemStyle}
        >
          Team
        </Scroll.Link>
        <Scroll.Link
          activeClass="active"
          to="contact"
          spy
          smooth
          duration={500}
          {...menuItemStyle}
        >
          Contact
        </Scroll.Link>
      </div>
    );
  }
}
