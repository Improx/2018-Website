import React from 'react';

import classNames from 'classnames';
import {css} from 'glamor';
import Scroll from 'react-scroll';
import onClickOutside from 'react-onclickoutside';
import FaBars from 'react-icons/lib/fa/bars';
import FaClose from 'react-icons/lib/fa/close';

import {fonts, colors} from '../../theme';
import './DropdownMenu.css';

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

const iconStyle = css({
  float: 'right',
  marginRight: '1rem',
});

class DropdownMenu extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
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
        className={classNames({'dropdown-menu': true, show: this.state.open})}
      >
        <div onClick={this.handleDropdownClick.bind(this)}>
          {this.state.open ? (
            <FaClose color={colors.yellow} size={'2.5em'} {...iconStyle} />
          ) : (
            <FaBars color={colors.yellow} size={'2em'} {...iconStyle} />
          )}
        </div>
        <div className="dropdown-content">
          <Scroll.Link
            className="nav-link"
            {...menuItemStyle}
            to="games"
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
            {...menuItemStyle}
            to="team"
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
              {...menuItemStyle}
              to="contact"
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
