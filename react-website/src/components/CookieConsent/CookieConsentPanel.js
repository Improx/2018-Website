import React from 'react';
import ReactGA from 'react-ga';
import {css} from 'glamor';

import {colors, fonts} from '../../theme';

const containerStyle = css({
  zIndex: 100,
  position: 'fixed',
  bottom: 0,
  backgroundColor: colors.grey,
  width: '100%',
  color: colors.light,
  fontFamily: fonts.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
});

const messageStyle = css({
    fontSize: '1rem',
});

const buttonStyle = css({
  border: '2px solid white',
  background: colors.grey,
  color: colors.light,
  WebkitBorderRadius: 28,
  MozBorderRadius: 28,
  borderRadius: 28,
  padding: '10px 15px 10px 15px',
  fontSize: '1rem',
  marginLeft: '1em',
  marginRight: '2rem',
  ':hover':{
      border: '2px solid ' + colors.yellow,
      color: colors.yellow,
  }
});

export default class CookieConsentPanel extends React.Component {
  constructor(props) {
    super(props);

    const cookieExists = document.cookie.indexOf('ImproxCookieConsent') > -1;
    this.state = {open: !cookieExists};

    if (cookieExists) {
      this.initGa();
    }

    this.handleAccept = this.handleAccept.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    if (this.state.open) {
      return (
        <div {...containerStyle}>
          <span {...messageStyle}>We use cookies to keep track of visitor numbers with Google Analytics.</span>
          <button {...buttonStyle} onClick={this.handleAccept}>
            Ok
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  closePanel() {
    this.setState({open: false});
  }

  handleScroll() {
    if (this.state.open) {
      this.handleAccept();
    }
  }

  handleAccept() {
    this.closePanel();
    this.initGa();

    const d = new Date();
    const exdays = 365;
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    document.cookie =
      'ImproxCookieConsent = improxgames.com;expires=' + d.toUTCString();
  }

  initGa() {
    ReactGA.initialize('UA-96076057-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}
