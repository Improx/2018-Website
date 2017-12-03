import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

export default class Game extends React.Component{
    state = { expanded: false };

    setExpanded(newState){
        this.setState({ expanded: newState });
    }

    handleMouseEnter = (e) => {
        e.preventDefault();
        this.setExpanded(true);
    }

    handleMouseExit = (e) => {
        e.preventDefault();
        this.setExpanded(false);
    }

    render(){
        const gameInfo = this.props.gameInfo;

        const desc = 
        this.state.expanded ? 
        (<div css={{
            padding: 10,
        }}>
            <h1 css={{
                height: '2em',
            }}>{gameInfo.name}</h1>

            <p>{gameInfo.description}</p>
        </div>)
        : (<none></none>);

        return (
        <div css={{
            backgroundSize: 'cover',
            backgroundColor: colors.light,
            color: colors.black,
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseExit}>
            <img css={{
                margin: 0,
            }}
            src={gameInfo.header}></img>

            {desc}
        </div>
        );
    }
}

Game.propTypes = {
children: PropTypes.node,
gameInfo: PropTypes.object,
};
