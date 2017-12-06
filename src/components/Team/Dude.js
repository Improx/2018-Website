import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../theme';

export default class Dude extends React.Component{
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
        const dudeInfo = this.props.dudeInfo;

        const desc = 
        this.state.expanded ? 
        (<div css={{
            padding: 10,
            backgroundColor: colors.dark,
            color: colors.light
        }}>
            <h1 css={{
                height: '2em',
            }}>{dudeInfo.name}</h1>

            <p>{dudeInfo.description}</p>
        </div>)
        : (<none></none>);

        return (
        <div css={{
            backgroundSize: 'cover',
            backgroundColor: colors.black,
            color: colors.black,
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseExit}>
            <img css={{
                margin: 0,
                borderRadius: '100%'
            }}
            src={dudeInfo.image}></img>

            {desc}
        </div>
        );
    }
}

Dude.propTypes = {
children: PropTypes.node,
dudeInfo: PropTypes.object,
};
