import React from 'react';
import Scroll from 'react-scroll';
import {colors} from '../../theme';

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
          css={{
            cursor: 'pointer',
            ':hover': {
              color: colors.yellow,
            },
          }}
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
          css={{
            cursor: 'pointer',
            ':hover': {
              color: colors.yellow,
            },
          }}
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
          css={{
            cursor: 'pointer',
            ':hover': {
              color: colors.yellow,
            },
          }}
        >
          Contact
        </Scroll.Link>
      </div>
    );
  }
}
