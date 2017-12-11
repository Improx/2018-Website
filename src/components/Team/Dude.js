import React from 'react';
import Modal from "react-responsive-modal";
import PropTypes from 'prop-types';

import {colors} from '../../theme';

import styles from './dudeImage.css'

export default class Dude extends React.Component{
    state = { open: false };

    onOpenModal = () => {
        this.setState({ open: true });
      };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const dudeInfo = this.props.dudeInfo;
        
        const { open } = this.state;
        
        return (
            <div css={{
                backgroundSize: 'cover',
                backgroundColor: colors.black,
                color: colors.black,
                textAlign: 'center'
            }}
            onClick={this.onOpenModal}>
            <img 
            className="dudeImage"
            src={dudeInfo.image}></img>

            <Modal open={open} onClose={this.onCloseModal} little>
                <h2>{dudeInfo.name}</h2>
                <p>{dudeInfo.description}</p>
            </Modal>
            </div>
        );
    }
}

Dude.propTypes = {
children: PropTypes.node,
dudeInfo: PropTypes.object,
};
