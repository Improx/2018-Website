import React from 'react';

import classNames from 'classnames';
import Scroll from 'react-scroll';
import onClickOutside from 'react-onclickoutside';

import menuIcon from '../../../assets/icons/yellow_menu.png';
import { colors } from '../../theme';
import './DropdownMenu.css';

class DropdownMenu extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  handleDropdownClick() {
    this.state.open ? this.closeDropdown() : this.openDropdown();
  }

  handleClickOutside = () => {
    this.closeDropdown();
  };

  openDropdown() {
    this.setState(prevState => ({
      open: true,
    }));
  }

  closeDropdown() {
    this.setState(prevState => ({
      open: false,
    }));
  }

  render() {
    return (
      <div
        className={classNames({ 'dropdown-menu': true, show: this.state.open })}
        onClick={this.handleDropdownClick.bind(this)}
      >
        <img src={menuIcon} />
        <div
          css={{ backgroundColor: colors.black }}
          className="dropdown-content"
        >
          <Scroll.Link
            activeClass="active"
            to="games"
            spy
            smooth
            duration={500}
            className="nav-link"
            onClick={this.handleDropdownClick}
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
            onClick={this.handleDropdownClick}
          >
            Team
          </Scroll.Link>
          <div onClick={this.handleDropdownClick.bind(this)}>
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
      </div>
    );
  }
}

export default onClickOutside(DropdownMenu);
