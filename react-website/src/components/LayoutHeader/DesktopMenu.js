import React from 'react';
import Scroll from 'react-scroll';
import ReactGA from 'react-ga';
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
          {...menuItemStyle}
          to="games"
          onClick={() => {
            Scroll.scroller.scrollTo('games', {
              activeClass: 'active',
              spy: true,
              smooth: true,
              duration: 500,
            });
            ReactGA.event({
              category: 'Navigation',
              action: 'Used navbar to go to GAMES.',
            });
          }}
        >
          Games
        </Scroll.Link>
        <Scroll.Link
          {...menuItemStyle}
          to="team"
          onClick={() => {
            Scroll.scroller.scrollTo('team', {
              activeClass: 'active',
              spy: true,
              smooth: true,
              duration: 500,
            });
            ReactGA.event({
              category: 'Navigation',
              action: 'Used navbar to go to TEAM.',
            });
          }}
        >
          Team
        </Scroll.Link>
        <Scroll.Link
          {...menuItemStyle}
          to="contact"
          onClick={() => {
            Scroll.scroller.scrollTo('contact', {
              activeClass: 'active',
              spy: true,
              smooth: true,
              duration: 500,
            });
            ReactGA.event({
              category: 'Navigation',
              action: 'Used navbar to go to CONTACT.',
            });
          }}
        >
          Contact
        </Scroll.Link>
      </div>
    );
  }
}
