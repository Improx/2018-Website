import React from 'react';
import PropTypes from 'prop-types';

import './game.css';

import {fonts, colors} from '../../theme';

export default class Game extends React.Component {
  render() {
    const gameInfo = this.props.gameInfo;

    return (
      <div
        css={{
          position: 'relative',
          backgroundColor: colors.light,
          height: '100%',
        }}
      >
        <div
          css={{
            boxShadow: '0 0 2px #888888',
            height: '100%',
            paddingBottom: 65,
          }}
        >
          <img src={this.props.gameInfo.header} css={{margin: 0}} />
          <div css={{padding: 10, color: colors.black}}>
            <h2 css={{fontFamily: fonts.primary}}>{gameInfo.name}</h2>
            <p css={{fontFamily: fonts.secondary, fontSize: '1.1em'}}>
              {gameInfo.description}
            </p>
          </div>
          {this.renderFooter(gameInfo.links)}
        </div>
      </div>
    );
  }

  renderFooter(links) {
    if (!links) return;

    const footer = (
      <footer
        css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          float: 'bottom',
          borderTop: 'solid 1px #88888866',
          textAlign: 'center',
        }}
      >
        {links.play && (
          <a
            href={links.play}
            target="_blank"
            css={{
              color: colors.black,
              height: '100%',
              textDecoration: 'none',
            }}
          >
            <div
              css={{
                width: '100%',
                height: '100%',
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor: colors.black,
                color: colors.light,
                ':hover': {
                  color: colors.yellow,
                },
              }}
            >
              <span
                css={{
                  fontFamily: fonts.primary,
                  fontSize: '1.3em',
                  letterSpacing: '2px',
                }}
              >
                <strong>Play</strong>
              </span>
            </div>
          </a>
        )}
        {links.presskit && <a href={links.presskit}>Presskit</a>}
      </footer>
    );

    return footer;
  }
}

Game.propTypes = {
  children: PropTypes.node,
  gameInfo: PropTypes.object,
};
