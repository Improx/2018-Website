import React from 'react';

import classNames from 'classnames';
import {css} from 'glamor';
import Scroll from 'react-scroll';
import onClickOutside from 'react-onclickoutside';
import ReactGA from 'react-ga';
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
              ReactGA.event({
                category: 'Navigation',
                action: 'Used mobile navbar to go to GAMES.',
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
              this.closeDropdown();
              ReactGA.event({
                category: 'Navigation',
                action: 'Used mobile navbar to go to TEAM.',
              });
            }}
          >
            Team
          </Scroll.Link>
          <div onClick={this.closeDropdown.bind(this)}>
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
                this.closeDropdown();
                ReactGA.event({
                  category: 'Navigation',
                  action: 'Used mobile navbar to go to CONTACT.',
                });
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
