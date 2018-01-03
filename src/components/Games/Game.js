import React from 'react';
import PropTypes from 'prop-types';

import './game.css';

import {colors} from '../../theme';

export default class Game extends React.Component {
  render() {
    const gameInfo = this.props.gameInfo;

    return (
      <div
        css={{
          height: '100%',
          position: 'relative',
          backgroundColor: colors.light,
        }}
      >
        <img src={this.props.gameInfo.header} css={{margin: 0}} />
        <div css={{marginBottom: 50}}>
          <h2>{gameInfo.name}</h2>
          <p>{gameInfo.description}</p>
        </div>
        {this.renderFooter(gameInfo.links)}
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
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        {links.play && (
          <a
            href={links.play}
            css={{
              color: colors.black,
              ':hover': {backgroundColor: colors.black, color: colors.yellow},
            }}
          >
            <strong>Play</strong>
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
