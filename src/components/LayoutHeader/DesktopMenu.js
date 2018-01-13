import React from 'react';
import Scroll from 'react-scroll';

export default class DesktopMenu extends React.Component {
  render() {
    return (
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
    );
  }
}
