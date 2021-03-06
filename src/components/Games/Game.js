import React from 'react';
import {css} from 'glamor';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

import './game.css';

import {fonts, colors} from '../../theme';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {highlighted: false};

    this.highlight = this.highlight.bind(this);
    this.unHighlight = this.unHighlight.bind(this);

    this.gameInfo = this.props.gameInfo;
  }

  render() {
    const gameInfo = this.gameInfo;

    return (
      <a
        href={gameInfo.links.play}
        alt={'Play ' + gameInfo.name}
        target="_blank"
        rel="nofollow noopener noreferrer"
        onMouseEnter={this.highlight}
        onMouseLeave={this.unHighlight}
        onClick={() => {
          ReactGA.event({
            category: 'Games',
            action: 'Went to play ' + this.props.gameInfo.name,
          });
        }}
        {...css({
          textDecoration: 'none',
        })}
      >
        <div
          {...css({
            position: 'relative',
            backgroundColor: colors.light,
            height: '100%',
          })}
        >
          <div
            {...css({
              boxShadow: '0 0 2px #888888',
              height: '100%',
            })}
          >
            <picture>
              <source srcSet={gameInfo.headerWebp} type="image/webp" {...css({margin: 0, width: '100%'})}/>
              <source srcSet={gameInfo.headerLegacy} type="image/png" {...css({margin: 0, width: '100%'})}/>
              <img src={gameInfo.headerLegacy} alt={gameInfo.name} {...css({margin: 0, width: '100%'})}/>
            </picture>
            <div {...css({padding: 10, color: colors.black})}>
              <h2 {...css({fontFamily: fonts.primary})}>{gameInfo.name}</h2>
              <p
                {...css({
                  fontFamily: fonts.secondary,
                  fontSize: '1.1em',
                  paddingBottom: 65,
                })}
              >
                {gameInfo.description}
              </p>
            </div>
            {this.renderFooter(gameInfo.name, gameInfo.links)}
          </div>
        </div>
      </a>
    );
  }

  highlight() {
    this.setState({highlighted: true});
  }

  unHighlight() {
    this.setState({highlighted: false});
  }

  renderFooter(name, links) {
    if (!links) return;

    const footer = (
      <footer
        {...css({
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          float: 'bottom',
          borderTop: 'solid 1px #88888866',
          textAlign: 'center',
        })}
      >
        {links.play && (
          <div
            {...css({
              color: colors.black,
              height: '100%',
              textDecoration: 'none',
            })}
          >
            <div
              {...css(
                {
                  width: '100%',
                  height: '100%',
                  paddingTop: 15,
                  paddingBottom: 15,
                  backgroundColor: colors.black,
                  color: colors.light,
                },
                this.state.highlighted && {color: colors.yellow}
              )}
            >
              <span
                {...css({
                  fontFamily: fonts.primary,
                  fontSize: '1.3em',
                  letterSpacing: '2px',
                })}
              >
                <strong>Play</strong>
              </span>
            </div>
          </div>
        )}
      </footer>
    );

    return footer;
  }
}

Game.propTypes = {
  children: PropTypes.node,
  gameInfo: PropTypes.object,
};
