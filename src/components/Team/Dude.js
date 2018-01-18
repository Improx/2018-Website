import React from 'react';
import PropTypes from 'prop-types';

import {fonts, colors} from '../../theme';

import styles from './dudeImage.css';

export default class Dude extends React.Component {
  render() {
    const dudeInfo = this.props.dudeInfo;

    return (
      <div
        css={{
          backgroundSize: 'cover',
          backgroundColor: colors.light,
          color: colors.black,
          boxShadow: '0 0 2px #888888',
          height: '100%',
        }}
      >
        <img
          css={{
            width: '100%',
          }}
          src={dudeInfo.image}
        />
        <div
          css={{
            marginLeft: '0.5em',
            marginRight: '0.5em',
            fontFamily: fonts.primary,
          }}
        >
          <h3
            css={{
              margin: '0',
              fontFamily: fonts.primary,
              color: colors.black,
            }}
          >
            {dudeInfo.name}
          </h3>
          <p
            css={{
              fontFamily: fonts.secondary,
              color: colors.grey,
              margin: '0',
              fontSize: '0.9em',
            }}
          >
            {dudeInfo.role}
          </p>
          <p css={{fontFamily: fonts.secondary, fontSize: '0.9em'}}>
            {dudeInfo.description}
          </p>
        </div>
      </div>
    );
  }
}

Dude.propTypes = {
  children: PropTypes.node,
  dudeInfo: PropTypes.object,
};
