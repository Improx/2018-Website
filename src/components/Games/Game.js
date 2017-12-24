import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-responsive-modal";

import {colors} from '../../theme';
import styles from './game.css'

export default class Game extends React.Component{
    state = { open: false };

    onOpenModal = () => {
        this.setState({ open: true });
      };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    handleClick = e => {
        e.preventDefault();
        this.setState({ open: true});
    }

    render(){
        const gameInfo = this.props.gameInfo;
        const open = this.state.open;

        return (
        <div
        onClick={this.handleClick} className="gameContainer">
            <img src={this.props.gameInfo.header} className="gameImage"></img>
            <Modal open={open} onClose={this.onCloseModal} little classNames={{transitionExitActive: 'transition-exit-active'}}>
                <h2>{gameInfo.name}</h2>
                <img src={gameInfo.header}></img>
                <p>{gameInfo.description}</p>
            </Modal>
        </div>
        );
    }
}

Game.propTypes = {
children: PropTypes.node,
gameInfo: PropTypes.object,
};
