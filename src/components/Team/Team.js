import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import Scroll from 'react-scroll';

import Block from '../Block';
import Dude from './dude';

import {colors} from '../../theme';
import dudeInfos from './dudeInfos';

const Team = () => (
  <Scroll.Element name="team">
    <div
      css={{
        backgroundColor: colors.black,
        color: colors.light,
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Block>
        <Row>
          <Col xs={12}>
            <h2>TEAM</h2>
          </Col>
        </Row>
        <Row height={2} center="xs">
          {dudeInfos.map((x, i) => {
            return (
              <Col xs={12} sm={6} md={2} lg={2} key={i}>
                <Dude dudeInfo={x} />
              </Col>
            );
          })}
        </Row>
      </Block>
    </div>
  </Scroll.Element>
);

Team.propTypes = {
  children: PropTypes.node,
};

export default Team;
