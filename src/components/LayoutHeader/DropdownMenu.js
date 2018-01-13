import React from 'react';

import classNames from 'classnames';
import Scroll from 'react-scroll';

import menuIcon from '../../../assets/icons/yellow_menu.png';
import {colors} from '../../theme';
import './DropdownMenu.css';

export default class DropdownMenu extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
  }

  handleDropdownClick() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  render() {
    return (
      <div
        className={classNames({'dropdown-menu': true, show: this.state.open})}
        onClick={this.handleDropdownClick.bind(this)}
      >
        <img src={menuIcon} />
        <div
          css={{backgroundColor: colors.black}}
          className="dropdown-content"
        >
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
    );
  }
}
