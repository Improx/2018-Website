import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

import styles from './dudeImage.css'

export default class Dude extends React.Component{

    render() {
        const dudeInfo = this.props.dudeInfo;
        

        
        return (
            <div css={{
                backgroundSize: 'cover',
                backgroundColor: colors.light,
                color: colors.black,
                textAlign: 'center',
                boxShadow: "0 0 2px #888888"
            }}>
            <img 
            css={{
                width: "500px"
            }}
            src={dudeInfo.image}></img>
            <h2>{dudeInfo.name}</h2>
            <p>{dudeInfo.description}</p>
            
            </div>
        );
    }
}

Dude.propTypes = {
children: PropTypes.node,
dudeInfo: PropTypes.object,
};
