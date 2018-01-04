import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

import styles from './dudeImage.css'

export default class Dude extends React.Component{

    render() {
        const dudeInfo = this.props.dudeInfo;
        

        
        return (
            <div css={{
                padding: "0 15px 0 15px"
            }}>
                <div css={{
                    backgroundSize: 'cover',
                    backgroundColor: colors.light,
                    color: colors.black,
                    boxShadow: "0 0 2px #888888"
                }}>
                    <img 
                    css={{
                        width: "100%"
                    }}
                    src={dudeInfo.image}></img>
                    <div css={{
                        marginLeft: "10px"
                    }}>
                        <h3 css={{margin: "0"}}>{dudeInfo.name}</h3>
                        <p css={{color: colors.grey, margin: "0"}}>{dudeInfo.role}</p>
                        <p>{dudeInfo.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Dude.propTypes = {
children: PropTypes.node,
dudeInfo: PropTypes.object,
};
