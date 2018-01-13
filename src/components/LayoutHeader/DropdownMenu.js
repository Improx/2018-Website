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
            className="nav-link"
            onClick={() => {
              Scroll.scroller.scrollTo('games', {
                activeClass: 'active',
                spy: true,
                smooth: true,
                duration: 500,
              });
              this.closeDropdown();
            }}
          >
            Games
          </Scroll.Link>
          <Scroll.Link
            className="nav-link"
            onClick={() => {
              Scroll.scroller.scrollTo('team', {
                activeClass: 'active',
                spy: true,
                smooth: true,
                duration: 500,
              });
              this.closeDropdown();
            }}
          >
            Team
          </Scroll.Link>
          <div onClick={this.closeDropdown.bind(this)}>
            <Scroll.Link
              className="nav-link"
              onClick={() => {
                Scroll.scroller.scrollTo('contact', {
                  activeClass: 'active',
                  spy: true,
                  smooth: true,
                  duration: 500,
                });
                this.closeDropdown();
              }}
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
