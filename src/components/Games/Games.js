import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';

import Block from '../Block';
import Game from './Game';

import {colors} from '../../theme';
import gameInfos from './gameInfos';

const Games = () => (

    <div css={{
        backgroundColor: colors.black,
        color: colors.light,
        paddingTop: 30,
        paddingBottom: 30,
    }}>
    <Block>
        <Row>
            <Col xs={12}>
                <h2>GAMES</h2>
            </Col>
        </Row>
        <Row height={2} center="xs">
            {gameInfos.map((x, i) => {
                return (
                <Col xs={12} sm={6} md={4} lg={4} key={i}>
                    <Game gameInfo={x}></Game>
                </Col>);
            })}
        </Row>
    </Block>
    </div>
);

Games.propTypes = {
    children: PropTypes.node,
};

export default Games;
